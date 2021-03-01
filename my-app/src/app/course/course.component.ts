import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   pelajaran = [
     { 'id':1 ,'name' :'Biologi', 'description': 'Lorem ipsum dolor sit amet,Ut enim ad minim veniam','image':'../../assets/bio.jpg'},
     { 'id':1 ,'name' :'kimia', 'description': 'Lorem ipsum dolor sit amet,Ut enim ad minim veniam','image':'../../assets/kimia.jpg'},
     { 'id':1 ,'name' :'Matematika', 'description': 'Lorem ipsum dolor sit amet,Ut enim ad minim veniam','image':'../../assets/mtk.jpg'},
     { 'id':1 ,'name' :'Fisika', 'description': 'Lorem ipsum dolor sit amet,Ut enim ad minim veniam','image':'../../assets/fisika.jpg'}
    
    ]

    buku = [
      { 'id':2 ,'name' :'Biologi', 'description': 'Lorem ipsum dolor sit amet,Ut enim ad minim veniam','image':'../../assets/buku_debian_telkom.jpg','link_pdf':'buku_debian.pdf'},
      { 'id':2 ,'name' :'kimia', 'description': 'Lorem ipsum dolor sit amet,Ut enim ad minim veniam','image':'../../assets/buku_debian_telkom.jpg','link_pdf':'buku_debian.pdf'},
      { 'id':2 ,'name' :'Matematika', 'description': 'Lorem ipsum dolor sit amet,Ut enim ad minim veniam','image':'../../assets/buku_debian_telkom.jpg','link_pdf':'buku_debian.pdf'},
      { 'id':2 ,'name' :'Fisika', 'description': 'Lorem ipsum dolor sit amet,Ut enim ad minim veniam','image':'../../assets/buku_debian_telkom.jpg','link_pdf':'buku_debian.pdf'}
     
     ]

}
