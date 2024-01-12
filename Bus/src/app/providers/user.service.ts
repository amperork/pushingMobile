import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Student } from '../models/student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  getStudentById(studentId: string): Observable<Student | undefined> {
    return this.firestore.collection('students').doc<Student>(studentId).valueChanges();
  }

  updateStudentWithQRCode(studentId: string, qrCode: string) {
    return this.firestore.collection('students').doc(studentId).update({ qrCode });
  }
}
