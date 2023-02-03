import { Component, OnInit } from '@angular/core';
import { Mail } from 'src/app/_interface/mail';
import { MailService } from 'src/app/_services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  mails : Mail[] = []


id = ""
usermail = ""
usermessage = ""
username = ""

  constructor( 
    private mailService: MailService,
  ) { }
  ngOnInit(): void {
  }
  send(): void {
    let data = {
      id: this.id,
      usermail: this.usermail,
      usermessage: this.usermessage
    }
    console.log(data)
    if (!data) { return; }
    this.mailService .sendMail(data)
      .subscribe(mail => {
        console.log(mail)
        this.mails.push(mail)
      });
  }

}
