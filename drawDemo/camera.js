var video;
 
function start() {
    video = document.getElementById('sourcevid');
     
     
    // Replace the source of the video element with the stream from the camera    
   navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;    
    if (getUserMedia) {
       navigator.getUserMedia({video: true}, successCallback, errorCallback);
        function successCallback(stream) 
        {
            video.src = window.URL.createObjectURL(stream);
            video.play();
        }
        function errorCallback(error) 
        {
          var errorMsg = 'User Denies access';
             document.querySelector('[role=main]').innerHTML = errorMsg;
            console.error('An error occurred: [CODE ' + error.code + ']');
            return;
        }
    } else {
        var errorMsg = '<p class="error">Uh oh, it appears your browser doesn\'t support this feature.
Please try with a <a href="http://snapshot.opera.com/labs/camera/">browser that has camera support</a>.</p>';
        document.querySelector('[role=main]').innerHTML = errorMsg;
        console.log('Native web camera streaming (getUserMedia) is not supported in this browser.');
        return;
    }
}
 
function stop()
{
 video = document.getElementById('sourcevid');
 video.src = "";
}
