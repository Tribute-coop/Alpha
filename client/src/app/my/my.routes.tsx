import React from 'react';

function Wallet(): JSX.Element {
  return (<div>Wallet</div>);
}

function Activity(): JSX.Element {
  return (<div>Activity</div>);
}

function Profile(): JSX.Element {
  return (<div>Profile</div>);
}

function Notifications(): JSX.Element {
  return (<div>Notifications</div>);
}

export default [
  { path: '/wallet', component: Wallet },
  { path: '/profile', component: Profile },
  { path: '/activity', component: Activity },
  { path: '/notifications', component: Notifications }
];
