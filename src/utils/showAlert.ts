import { ALERT_TYPE, Dialog } from 'react-native-alert-notification';

const showAlert = (title: string, textBody: string, autoClose = 150) =>
  Dialog.show({
    type: ALERT_TYPE.DANGER,
    title,
    textBody,
    button: 'CLOSE',
    closeOnOverlayTap: true,
    autoClose,
  });

export default showAlert;
