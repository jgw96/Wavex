export const config = {
  appId: 'c3c9185e-a7ce-477d-aa4b-d49cf04acf52',
  scopes: [
    'User.Read',
    'UserActivity.ReadWrite.CreatedByApp',
    'Device.Read',
    'Device.Command'
  ],
  redirectURI: `${location.origin}/home`
};