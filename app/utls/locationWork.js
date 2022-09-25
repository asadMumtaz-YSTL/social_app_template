import ReactNativeForegroundService from '@supersami/rn-foreground-service';
import RNLocation from 'react-native-location';

let locationSubscription = null;
let locationTimeout = null;

const onOnline = (func) => {
  ReactNativeForegroundService.add_task(
    () => {
      RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'fine',
        },
      }).then(granted => {
        console.log('Location Permissions: ', granted);
        // if has permissions try to obtain location with RN location
        if (granted) {
          console.log('first');
          locationSubscription && locationSubscription();
          locationSubscription = RNLocation.subscribeToLocationUpdates(
            ([locations]) => {
              locationSubscription();
              locationTimeout && clearTimeout(locationTimeout);
              console.log(locations);
              func(locations?.latitude, locations?.longitude)
              // sendLocationReq(locations?.latitude, locations?.longitude);
            },
          );
        } else {
          locationSubscription && locationSubscription();
          locationTimeout && clearTimeout(locationTimeout);
          console.log('no permissions to obtain location');
        }
      });
    },
    {
      delay: 10000,
      onLoop: true,
      taskId: '144',
      onError: e => console.log('Error logging:', e),
    },
  );
  // starting  foreground service.
  return ReactNativeForegroundService.start({
    id: 144,
    title: 'Foreground Service',
    message: 'you are online!',
  });
};

const goOffline = () => {
  ReactNativeForegroundService.stop();
  ReactNativeForegroundService.remove_task('144');
};

export {onOnline, goOffline};
