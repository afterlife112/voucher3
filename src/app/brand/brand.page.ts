import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { Meta, Title } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.page.html',
  styleUrls: ['./brand.page.scss'],
})
export class BrandPage implements OnInit {

  constructor(private meta: Meta, public platform: Platform,
    public activatedRoute: ActivatedRoute, public nav: NavController, private title: Title, private iab: InAppBrowser, private http: HttpClient) { }

  widther(x) {
    // console.log(this.platform.width() >= x)
    this.puller = (this.platform.width() >= 900 ? 450 : (this.platform.width() < 600 ? 300 : this.platform.width() / 2));
    // console.log(this.puller)
    return this.platform.width() >= x;
  }

  enter = false;

  item = "";
  user = "";
  voucher = {} as any;
  influencer = {} as any;
  vendor = "";
  qty = 1;
  selected = 0;
  puller = this.platform.width() / 2;

  var_select = [0, 1];

  // this.voucher['variations'][loop0]['selections'][var_select[loop0]]

  // {price:x , name: x}

  disabled = [true, true, true]

  vendor_info = {} as any;

  openlink(x, y) {
    let temp = (y == 'Facebook' ? 'https://' : (y == 'Instagram' ? 'https://' : '')) +
      (y == 'Facebook' ? 'www.facebook.com/' : (y == 'Instagram' ? 'www.instagram.com/' : '')) + x;
    // window.open(temp);
    this.iab.create(temp, '_system');
    // xxx
  }

  proper2(x) {
    return Math.round(((Math.abs(x) || 0) + Number.EPSILON) * 100) / 100
  }

  checkit(x) {
    return x.filter(a => a.value.status == true);
  }

  lengthof(x) {
    return x ? x.length : 0;
  }

  rounder(x) {
    return Math.floor(x);
  }

  widtherget() {
    return this.platform.width();
  }

  stringornot(x) {
    return (typeof x == "string" ? true : false)
  }

  go(x) {
    this.nav.navigateForward('home/' + x + '/' + this.user);
  }

  links = [] as any;
  items = {};
  load = true;
  complete = false;
  ngOnInit() {
    // this.http.post('https://us-central1-newvsnap.cloudfunctions.net/vsnapsql/getmeta', { id: this.id }).subscribe(data => {

    //   this.meta.updateTag({ itemprop: 'name', content: data['success'].name })
    //   this.meta.updateTag({ itemprop: 'description', content: (data['success'].description || '') })
    //   this.meta.updateTag({ itemprop: 'image', content: data['success'].thumbnail })

    // });
    // private http: HttpClient,
    // load=true;
    // complete=false;

    this.vendor = this.activatedRoute.snapshot.paramMap.get('vendor');
    this.user = this.activatedRoute.snapshot.paramMap.get('user');

    this.http.post('https://us-central1-newvsnap.cloudfunctions.net/vsnapsql/getmeta2', { type: "vendors", id: this.vendor }).subscribe(data => {

      if (Object.keys(data['success']).length) {
        this.load = false;
        this.items = data['success'];

        this.title.setTitle(data['success'].name + '\'s Vsnap Vendor Store')
        // this.meta.updateTag({ name: 'description', content: data['success'].description })

        this.meta.updateTag({ itemprop: 'name', content: data['success'].name + '\'s Vsnap Vendor Store' })
        this.meta.updateTag({ itemprop: 'description', content: (data['success'].description || '') })
        this.meta.updateTag({ itemprop: 'image', content: data['success'].photo || "https://i.imgur.com/cW5MqH2.png" })
        this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/brand/' + this.vendor + '/' + this.user) })
        this.meta.updateTag({ property: 'og:type', content: 'article' })
        this.meta.updateTag({ property: 'og:description', content: (data['success'].description || '') })
        this.meta.updateTag({ property: 'og:title', content: data['success'].name + '\'s Vsnap Vendor Store' })
        this.meta.updateTag({ property: 'og:image', content: data['success'].photo || "https://i.imgur.com/cW5MqH2.png" })
        this.meta.updateTag({ property: 'og:image:secure_url', content: data['success'].photo || "https://i.imgur.com/cW5MqH2.png" })
        this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' })
        this.meta.updateTag({ property: 'og:image:width', content: '500' })
        this.meta.updateTag({ property: 'og:image:height', content: '500' })

        this.complete = true;
      } else {
        this.load = false;
      }

    })
  }

  tomain() {
    this.nav.navigateForward('main?user=' + this.user)
  }

  join(){
    window.open('https://register.vsnap.my/influencer');
  }

  ionViewWillEnter() {

    this.vendor = this.activatedRoute.snapshot.paramMap.get('vendor');
    this.user = this.activatedRoute.snapshot.paramMap.get('user');

    if(this.vendor != "5qjg3XyuGGdu1janN1yp305qWL62"){

      this.http.post('https://api.vsnap.my/datavendorvouchers', { id: this.vendor }).subscribe(a => {
        this.voucher = a['data'] || [];
        console.log(this.voucher)
      })

    }else{

      this.http.post('https://api.vsnap.my/datavoucherbytag', { tag: "CSR2021" }).subscribe(a => {
        console.log('here');
        
        this.voucher = a['data'] || [];
        console.log(this.voucher)
      })

    }

   

    this.http.post('https://api.vsnap.my/dataVendorlogin', { userid: this.vendor }).subscribe(c => {
      if (c['data'][1]) {
        if (c['data'][1].id) {
          this.vendor_info = c['data'][1] || {};
          this.title.setTitle(this.vendor_info['name'])
          // if (this.vendor_info['id'] == "5qjg3XyuGGdu1janN1yp305qWL62") {

          //   this.http.post('https://api.vsnap.my/datatagvouchers', { tag: "CSR2021" }).subscribe(z => {
          //     this.voucher = z['data'] || [];
          //     console.log(this.voucher)
          //   })

          // }
        } else {
          this.tomain()
          this.vendor_info = {};
        }
      } else {
        this.tomain()
        this.vendor_info = {};
      }

    }, e => {
      this.tomain()
      this.vendor_info = {};
    })

    this.influencer.id = this.user;
    this.http.post('https://api.vsnap.my/getusers', { id: this.user }).subscribe(a => {

      if (a['data'].id) {
        this.influencer = a['data'] || {};
      } else {
        this.http.post('https://api.vsnap.my/getusers', { id: "Ypgf8VDQJrRhsrP7RREb3n321sf1" }).subscribe(a => {
          if (a['data'].id) {
            this.influencer = a['data'] || {};
          } else {
            this.tomain()
          }
        }, e => {
          this.tomain()
        })
      }
    }, e => {
      this.http.post('https://api.vsnap.my/getusers', { id: "Ypgf8VDQJrRhsrP7RREb3n321sf1" }).subscribe(a => {
        if (a['data'].id) {
          this.influencer = a['data'] || {};
        } else {
          this.tomain()
        }
      }, e => {
        this.tomain()
      })
    })

    firebase.database().ref('link').once('value', data => {
      this.links = data.val();
    })
  }

  store(x) {
    this.nav.navigateForward('store/' + x);
  }

  donatecsr2021() {
    this.iab.create("https://pg.revenuemonster.my/v1/invoice-group/input?invoiceGroupId=1626521195381410810", '_system');
  }

  outside(x) {
    this.iab.create(this.links[x], '_system');
    // window.open(this.links[x]);
  }
}
