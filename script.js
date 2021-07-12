/* =============
 Getting Media Devices
 =============== */

// const constraints = {
//     'video': true,
//     'audio': true
// }

// navigator.mediaDevices.getUserMedia(constraints)
//     .then(stream => {
//         console.log('Got MediaStream : ',stream)
//     })
//     .catch(err => {
//         console.log('Error accessing media devices : ', err)
//     });

/* =============
 Querying Media Devices
 =============== */

//  function getConnectedDevices(type,callback){
//      navigator.mediaDevices.enumerateDevices()
//         .then(devices => {
//             console.log('devices : ',devices)
//             const filtered = devices.filter(device => device.kind === type)
//             callback(filtered)
//         })

//  }

//  getConnectedDevices('videoinput',cameras => console.log('Cameras found', cameras))


/* =============
 Listening for devices changes
 =============== */

// Updates the select element with the provided set of cameras
// function updateCameraList(cameras){
//     console.log('camera ',cameras,typeof(cameras))
//     const listElement = document.querySelector('#availableCameras');
//     const camDiv = document.getElementById('cam')
//     console.log(camDiv)
//     listElement.innerHTML = '';

//     // cameras.map(camera => {
//     //     console.log(camera)
//     //     const cameraOption = document.createElement('div')
//     //     cameraOption.innerText = camera.label
//     //     cameraOption.id = camera.deviceId
//     //     camDiv.append(cameraOption)
//     // })
//     // camDiv.append(cameraOption)
    
//     cameras.map(camera => {
//         const cameraOption = document.createElement('option');
//         cameraOption.label = camera.label;
//         cameraOption.value = camera.deviceId;
//         listElement.append(cameraOption)
//     })
//     // forEach(cameraOption => listElement.append(cameraOption))
     
// }

// // Fetch an array of devices of a certain type
// async function getConnectedDevices(type){
//     const devices = await navigator.mediaDevices.enumerateDevices();
//     const seletedDevice = devices.filter(device => device.kind === type)
//     return seletedDevice
// }

// // Get the initial set of cameras connected
// (async () => {
//     const videoCameras = await getConnectedDevices('videoinput')

//     updateCameraList(videoCameras);
// })()


// // Listen for changes to media devices and update the list accordingly

// navigator.mediaDevices.addEventListener('devicechange', e => (update()))
// async function update(){
//     const newCameraList = await getConnectedDevices('video')
//     console.log('newCameraList',newCameraList)
//     updateCameraList(newCameraList)
// }


/* =============
 Media Constraints
 =============== */

//  async function getConnectedDevices(type){
//      const devices = await navigator.mediaDevices.enumerateDevices()
//      console.log('devices',devices)
//      return devices.filter(device => device.kind === type)
//  }

//  // Open camera with at least minWidth and midHeight capabilities
//  async function openCamera(cameraId, minWidth, minHeight){
//      const constraints = {
//          'audio': {'echoCancellation' : true},
//          'video': {
//              'deviceId': cameraId,
//               'width': {'min': minWidth},
//               'height': {'min': minHeight}
//          }
//      }

//      return await navigator.mediaDevices.getUserMedia(constraints)
//  }

//  async function getCameras(){
//     const cameras =  await getConnectedDevices('videoinput')

//     console.log('got camera', cameras)

//     if(cameras && cameras.length > 0){
//         console.log(cameras)
//         // open first available video camera with a resolution of 1280x720 pixels
//         const camera = openCamera(cameras[0].deviceId, 640, 480)
//         console.log('camera',camera)
//     }
//  }
//  getCameras()

/* =============
 Local Playback
 =============== */

//  async function playVideoFromCamera(){
//      try{
//        const constraints = {'audio': {'echoCancellation' : true},
//                 'video': {
//                      'width': {'min': 640},
//                      'height': {'min': 480}
//                 }
//             }
//        const stream = await navigator.mediaDevices.getUserMedia(constraints)
//        console.log(stream)
//        const videoElement = document.getElementById('localVideo');
//        videoElement.srcObject = stream;
//     }catch(err){
//        console.log('Error opening video camera ',err)
//      }
//  }
//  playVideoFromCamera()

/* =============
 screen capture
 =============== */

//  async function playVideoFromCamera(){
//          try{
//            const constraints = {
//                cursor: 'always' | 'motion' | 'never',
//                displaySurface: 'application' | 'browser' | 'monitor' | 'window'
//            }
//            const stream = await navigator.mediaDevices.getDisplayMedia(constraints)
//            console.log(stream)
//            const videoElement = document.getElementById('localVideo');
//            videoElement.srcObject = stream;
//         }catch(err){
//            console.log('Error opening video camera ',err)
//          }
//      }
//      playVideoFromCamera()
