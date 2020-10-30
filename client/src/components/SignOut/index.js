import React from 'react';
import Signout from '../buttons/SignoutLink'

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
    <Signout type="button" onClick={firebase.doSignOut} to='/'>
        Sign Out
    </Signout>
);

export default withFirebase(SignOutButton);