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
    {time:"00:21.06","line":"You're the light, you're the night","is_active":false},
    {time:"00:23.79","line":"You're the colour of my blood","is_active":false},
    {time:"00:26.57","line":"You're the cure, you're the pain","is_active":false},
    {time:"00:29.12","line":"You're the only thing I wanna touch","is_active":false},
    {time:"00:34.01","line":"Never knew that it could mean so much, so much","is_active":false},
    {time:"00:41.11","line":"You're the fear, I don't care","is_active":false},
    {time:"00:43.79","line":"Cause I've never been so high","is_active":false},
    {time:"00:46.51","line":"Follow me through the dark","is_active":false},
    {time:"00:48.82","line":"Let me take you past our satellites","is_active":false},
    {time:"00:53.87","line":"You can see the world you brought to life, to life","is_active":false},
    {time:"01:01.34","line":"So love me like you do, love me like you do","is_active":false},
    {time:"01:07.40","line":"Love me like you do, love me like you do","is_active":false},
    {time:"01:12.13","line":"Touch me like you do, touch me like you do","is_active":false},
    {time:"01:18.61","line":"What are you waiting for?","is_active":false},
    {time:"01:21.53","line":"Fading in, fading out","is_active":false},
    {time:"01:23.64","line":"On the edge of paradise","is_active":false},
    {time:"01:26.78","line":"Every inch of your skin is a holy grail I've got to find","is_active":false},
    {time:"01:34.25","line":"Only you can set my heart on fire, on fire","is_active":false},
    {time:"01:41.64","line":"Yeah, I'll let you set the pace","is_active":false},
    {time:"01:47.50","line":"Cause I'm not thinking straight","is_active":false},
    {time:"01:52.85","line":"My head spinning around I can't see clear no more","is_active":false},
    {time:"01:59.33","line":"What are you waiting for?","is_active":false},
    {time:"02:03.22","line":"Love me like you do, la-la-love me like you do (like you do)","is_active":false},
    {time:"02:07.61","line":"Love me like you do, la-la-love me like you do","is_active":false},
    {time:"02:13.05","line":"Touch me like you do, ta-ta-touch me like you do","is_active":false},
    {time:"02:19.45","line":"What are you waiting for?","is_active":false},
    {time:"02:22.81","line":"Love me like you do, la-la-love me like you do (like you do)","is_active":false},
    {time:"02:28.47","line":"Love me like you do, la-la-love me like you do (ye-yeah)","is_active":false},
    {time:"02:32.93","line":"Touch me like you do, ta-ta-touch me like you do","is_active":false},
    {time:"02:39.80","line":"What are you waiting for?","is_active":false},
    {time:"02:53.12","line":"I'll let you set the pace","is_active":false},
    {time:"02:58.22","line":"Cause I'm not thinking straight","is_active":false},
    {time:"03:03.53","line":"My head's spinning around, I can't see clear no more","is_active":false},
    {time:"03:12.04","line":"What are you waiting for?","is_active":false},
    {time:"03:16.53","line":"Love me like you do, la-la-love me like you do (like you do)","is_active":false},
    {time:"03:21.49","line":"Love me like you do, la-la-love me like you do (ye-yeah)","is_active":false},
    {time:"03:25.86","line":"Touch me like you do, ta-ta-touch me like you do","is_active":false},
    {time:"03:33.59","line":"What are you waiting for?","is_active":false},
    {time:"03:36.66","line":"Love me like you do, la-la-love me like you do (like you do)","is_active":false},
    {time:"03:41.05","line":"Love me like you do, la-la-love me like you do (whoa)","is_active":false},
    {time:"03:46.03","line":"Touch me like you do, ta-ta-touch me like you do (ah)","is_active":false},
    {time:"03:53.12","line":"What are you waiting for?","is_active":false},
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

  millisToMinutesAndSeconds(millis) 
  {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (Number(minutes) < 10 ? '0' : '') + minutes + ":" + (Number(seconds) < 10 ? '0' : '') + seconds;
  }

  clockRunning()
  {
    this.mediaFile.getCurrentPosition().then((position) => 
    {
      this.time_media_has_started_playing = (position*1000);
      if(this.time_media_has_started_playing > 0)
      {
        let time_formatted = this.millisToMinutesAndSeconds(this.time_media_has_started_playing);
        //console.log("Started",time_formatted);
        this.time = time_formatted+"."+this.zeroPrefix(this.humderneath_second,2);
        //console.log("TIME",this.time);
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
      }
    });
  }

  ionViewDidLeave()
  {
    this.mediaFile.release();
  }
}
