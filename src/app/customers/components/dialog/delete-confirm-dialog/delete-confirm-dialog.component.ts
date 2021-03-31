import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./delete-confirm-dialog.component.css']
})
export class DeleteConfirmDialogComponent implements OnInit {

  message : string;
  constructor(private dialogRef: MatDialogRef<DeleteConfirmDialogComponent>, @Inject(MAT_DIALOG_DATA) private data) { 
    this.message = `Are you sure you want to delete this ${data.ressource}?`
  }

  ngOnInit(): void {
  }

  /**
   *  This is the first way to do it
   */
  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

  /**
   *  End of first way to do it
   */

}
