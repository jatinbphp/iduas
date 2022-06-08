import { Component } from '@angular/core';
import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';
import { LoadingController, Platform } from '@ionic/angular';
@Component({
  selector: 'app-wishlist',
  templateUrl: 'wishlist.page.html',
  styleUrls: ['wishlist.page.scss']
})

export class WishlistPage 
{
  private mediaFile : MediaObject;
  public is_playing_should_enabled : boolean = true;
  public is_pause_should_enabled : boolean = false;
  public is_stop_should_enabled : boolean = false;
  private media_current_position : any = '';
  //APART FROM MEDIA IT IS SEPERATE PORTION FOR TIMER
  public poemArray:any=[
    {time:"00:21.87","line":"You're the light, you're the night","is_active":false},
    {time:"00:24.03","line":"You're the colour of my blood","is_active":false},
    {time:"00:27.01","line":"You're the cure, you're the pain","is_active":false},
    {time:"00:29.13","line":"You're the only thing I wanna touch","is_active":false},
    {time:"00:34.60","line":"Never knew that it could mean so much, so much","is_active":false},
    {time:"00:41.52","line":"You're the fear, I don't care","is_active":false},
    {time:"00:43.97","line":"Cause I've never been so high","is_active":false},
    {time:"00:46.46","line":"Follow me through the dark","is_active":false},
    {time:"00:49.97","line":"Let me take you past our satellites","is_active":false},
    {time:"00:53.88","line":"You can see the world you brought to life, to life","is_active":false},
    {time:"01:02.00","line":"So love me like you do, love me like you do","is_active":false},
    {time:"01:06.69","line":"Love me like you do, love me like you do","is_active":false},
    {time:"01:12.11","line":"Touch me like you do, touch me like you do","is_active":false},
    {time:"01:18.89","line":"What are you waiting for?","is_active":false},
    {time:"01:21.60","line":"Fading in, fading out","is_active":false},
    {time:"01:24.18","line":"On the edge of paradise","is_active":false},
    {time:"01:26.77","line":"Every inch of your skin is a holy grail I've got to find","is_active":false},
    {time:"01:34.50","line":"Only you can set my heart on fire, on fire","is_active":false},
    {time:"01:41.79","line":"Yeah, I'll let you set the pace","is_active":false},
    {time:"01:46.87","line":"Cause I'm not thinking straight","is_active":false},
    {time:"01:52.42","line":"My head spinning around I can't see clear no more","is_active":false},
    {time:"01:59.75","line":"What are you waiting for?","is_active":false},
    {time:"02:03.02","line":"Love me like you do, la-la-love me like you do (like you do)","is_active":false},
    {time:"02:07.60","line":"Love me like you do, la-la-love me like you do","is_active":false},
    {time:"02:12.10","line":"Touch me like you do, ta-ta-touch me like you do","is_active":false},
    {time:"02:19.56","line":"What are you waiting for?","is_active":false},
    {time:"02:22.95","line":"Love me like you do, la-la-love me like you do (like you do)","is_active":false},
    {time:"02:28.35","line":"Love me like you do, la-la-love me like you do (ye-yeah)","is_active":false},
    {time:"02:32.53","line":"Touch me like you do, ta-ta-touch me like you do","is_active":false},
    {time:"02:39.73","line":"What are you waiting for?","is_active":false},
    {time:"02:52.94","line":"I'll let you set the pace","is_active":false},
    {time:"02:57.95","line":"Cause I'm not thinking straight","is_active":false},
    {time:"03:03.23","line":"My head's spinning around, I can't see clear no more","is_active":false},
    {time:"03:12.05","line":"What are you waiting for?","is_active":false},
    {time:"03:15.71","line":"Love me like you do, la-la-love me like you do (like you do)","is_active":false},
    {time:"03:21.00","line":"Love me like you do, la-la-love me like you do (ye-yeah)","is_active":false},
    {time:"03:25.77","line":"Touch me like you do, ta-ta-touch me like you do","is_active":false},
    {time:"03:32.89","line":"What are you waiting for?","is_active":false},
    {time:"03:36.07","line":"Love me like you do, la-la-love me like you do (like you do)","is_active":false},
    {time:"03:41.11","line":"Love me like you do, la-la-love me like you do (whoa)","is_active":false},
    {time:"03:46.21","line":"Touch me like you do, ta-ta-touch me like you do (ah)","is_active":false},
    {time:"03:53.04","line":"What are you waiting for?","is_active":false},
  ];
  public lastIndex:number=0;
  public timeBegan = null;
  public timeStopped:any = null
  public stoppedDuration:any = 0
  public started = null
  public blankTime = "00:00.00"
  public time = "00:00.00";
  public count= 0;
  public humderneath_second=0;  
  public time_media_has_started_playing:any='';
  //APART FROM MEDIA IT IS SEPERATE PORTION FOR TIMER
  constructor(private media: Media, private platform: Platform, private loadingCtrl: LoadingController)
  {}

  async ionViewWillEnter()
  {
    this.mediaFile = this.media.create("https://app.thehaydariproject.com/uploads/mp3File/ellie-goulding.mp3");      
  }

  PlayMedia()
  {
    this.is_playing_should_enabled = false;
    this.is_pause_should_enabled = true;
    this.is_stop_should_enabled = false;
    if(this.media_current_position > 0)
    {
      console.log("SEEK",this.media_current_position);
      this.mediaFile.seekTo(this.media_current_position);
      this.mediaFile.play();      
    }
    else 
    {
      console.log("PLAY");
      this.mediaFile.play();
    }
    //APART FROM MEDIA IT IS SEPERATE PORTION FOR TIMER
    if (this.timeBegan === null) 
    {
      this.timeBegan = new Date();
    }
    if (this.timeStopped !== null) 
    {
      let newStoppedDuration:any = (+new Date() - this.timeStopped)
      this.stoppedDuration = this.stoppedDuration + newStoppedDuration;
    }
    this.started = setInterval(this.clockRunning.bind(this), 1);
    //APART FROM MEDIA IT IS SEPERATE PORTION FOR TIMER
  }

  PauseMedia()
  {
    this.is_playing_should_enabled = true;
    this.is_pause_should_enabled = false;
    this.is_stop_should_enabled = true;

    this.mediaFile.pause();    
    this.mediaFile.getCurrentPosition().then((position) => 
    {
      this.media_current_position = (position*1000);
    });
    //APART FROM MEDIA IT IS SEPERATE PORTION FOR TIMER 
    this.timeStopped = new Date();
    clearInterval(this.started);
    //APART FROM MEDIA IT IS SEPERATE PORTION FOR TIMER
  }

  StopMedia()
  {
    this.is_playing_should_enabled = true;
    this.is_pause_should_enabled = false;
    this.is_stop_should_enabled = false;

    this.mediaFile.release();
    //APART FROM MEDIA IT IS SEPERATE PORTION FOR TIMER 
    clearInterval(this.started);
    this.stoppedDuration = 0;
    this.timeBegan = null;
    this.timeStopped = null;
    this.time = this.blankTime;
    //APART FROM MEDIA IT IS SEPERATE PORTION FOR TIMER
  }

  zeroPrefix(num, digit) 
  {
    let zero = '';
    for(let i = 0; i < digit; i++) 
    {
      zero += '0';      
    }
    return (zero + num).slice(-digit);
  }//APART FROM MEDIA IT IS SEPERATE PORTION FOR TIMER

  clockRunning()
  {
    this.mediaFile.getCurrentPosition().then((position) => 
    {
      this.time_media_has_started_playing = (position*1000);
    });
    if(this.time_media_has_started_playing > 0)
    {
      console.log("time_media_has_started_playing",this.time_media_has_started_playing);
      let currentTime:any = new Date();
      let timeElapsed:any = new Date(currentTime - this.timeBegan - this.stoppedDuration);
      let hour = timeElapsed.getUTCHours();
      let min = timeElapsed.getUTCMinutes();
      let sec = timeElapsed.getUTCSeconds();
      //this.time=this.zeroPrefix(hour,2)+":"+this.zeroPrefix(min,2)+":"+this.zeroPrefix(sec,2) ;
      this.time = this.zeroPrefix(min,2)+":"+this.zeroPrefix(sec,2)+"."+this.zeroPrefix(this.humderneath_second,2);
      /*
      if(this.count%100 == 0)
      {
        let index = this.poemArray.findIndex(x => x.time === this.time);
        if(index > 0)
        {
          this.poemArray[this.lastIndex]['is_active']=false;
          this.poemArray[index]['is_active']=true;
          this.lastIndex=index;
        }
      }
      */
      let index_to_heighlight = 0;
      Object.entries(this.poemArray).forEach(async (entry) => 
      {
        const [key, value] = entry;
        if(value['time'] == this.time)
        {
          this.poemArray[this.lastIndex]['is_active']=false;
          this.poemArray[index_to_heighlight]['is_active']=true;
          this.lastIndex=index_to_heighlight;
        }
        index_to_heighlight++;
      });
      if(this.humderneath_second > 99)
      {
        this.humderneath_second=0;
      } 
      this.count++;
      this.humderneath_second++;
    }//APART FROM MEDIA IT IS SEPERATE PORTION FOR TIMER
    //REFERENCE FOR TIMER :: //https://medium.com/web-developer/create-a-stopwatch-ionic-3-angular-5-d45bc0358626
  }
}
