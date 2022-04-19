import React from 'react';
import Header from '../header/Header';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <div style={{ maxWidth: "90%", margin: 'auto' }}>
                <h2> 1. Difference between authorization and authentication?</h2>
                <h5>
                    Authentication <br /> <br />
                    Authentication is about validating your credentials like User Name/User ID and password to verify your identity. We use the OpenID Connect protocol for that. You can manage your authentication by clicking on My Account link in the upper right corner. <br /> <br />

                    Authorization <br /> <br />

                    Authorization, on the other hand, occurs after your identity is successfully authenticated by cloudHQ. Then you can give permission to cloudHQ to access the resources such as files, emails. This is handled with the OAuth2 protocol. In simple terms, authorization gives our system the ability to access your data in the cloud. So you need to authorize access of Box and Google Drive as admin@. The authorizations are done under the Cloud Accounts tab.</h5>
                <h2> 2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                <h5> Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                    Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend. </h5>
                <h2> 3. What other services does firebase provide other than authentication?</h2>
                <h5> 1. Parse</h5>
                <h5> 2. Back4app	</h5>
                <h5> 3. Kinvey</h5>
            </div>
        </div >
    );
};

export default Blogs;