import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { useAuth0, Auth0Provider } from 'react-native-auth0';
import { useNavigation } from '@react-navigation/native';

const HomeGoogle = () => {
    const [status, setStatus] = useState(false);
    const navigation = useNavigation();
    const { authorize, clearSession, user, error, isLoading, isAuthenticated } = useAuth0();
    const loggedIn = user !== undefined && user !== null;

    const onLogin = async () => {
        try {
            await authorize();
            navigation.navigate('Inicio')
        } catch (e) {
            console.log(e);
        }
    };

    const onLogout = async () => {
        try {
            await clearSession();
        } catch (e) {
            console.log('Log out cancelled');
        }
    };

    useEffect(() => {
        if (user !== undefined && user !== null) {
            navigation.navigate('Inicio'); 
        }
    }, []);

    if (isLoading) {
        return <View><Text>Loading</Text></View>;
    }

    return (
        <View>
            <Button
                onPress={loggedIn ? onLogout : onLogin}
                title={loggedIn ? 'Log Out' : 'Login con Google'}
            />
        </View>
    );
};

const ButtonGoogle = () => {
    return (
        <Auth0Provider domain={"dev-x3k3loddo1dppwtj.us.auth0.com"} clientId={"32c4hcZn3hyiFQ915zoPORDKHnUsR1Ux"}>
            <HomeGoogle />
        </Auth0Provider>
    );
};

export default ButtonGoogle;
