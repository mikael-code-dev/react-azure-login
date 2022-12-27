import React, { useState, useEffect } from 'react';
import { Providers, ProviderState } from '@microsoft/mgt-element';
import { Login } from '@microsoft/mgt-react';

const useIsSignedIn = () => {
    const [isSignedIn, SetIsSignedIn] = useState(false);

    useEffect(() => {
        const updateState = () => {
            const provider = Providers.globalProvider;
            SetIsSignedIn(provider && provider.state === ProviderState.SignedIn);
        };

        Providers.onProviderUpdated(updateState);
        updateState();

        return () => {
            Providers.removeProviderUpdatedListener(updateState);
        };
    }, []);

    return [isSignedIn];
};

const Header = () => {
    return <div>{<Login />}</div>;
};

export default Header;
