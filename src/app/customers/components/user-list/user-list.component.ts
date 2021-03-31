import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../services/user.service';
import { DeleteConfirmDialogComponent } from '../dialog/delete-confirm-dialog/delete-confirm-dialog.component';
import { UserDialogFormComponent } from '../user-dialog-form/user-dialog-form.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'fullName', 'email', 'birthDate', 'createdAt', 'updatedAt',  'Actions'];
  dataSource : MatTableDataSource<any>;
  constructor(private userService: UserService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe((response)=>{
      this.dataSource = new MatTableDataSource<any>(response);
      // Assign the paginator *after* dataSource is set
      this.dataSource.paginator = this.paginator;
      // Assign the sort *after* dataSource is set
      this.dataSource.sort = this.sort;
    }, (error)=>{
        console.log(error);        
    });
  }

  addUser() {
    const createDialog = this.dialog.open(UserDialogFormComponent, {
      maxWidth: "400px",
      data: null
    });

    createDialog.afterClosed().subscribe(result => {
      if(result !== null)
      {
        this.userService.addUser(result).subscribe((response)=>{
          this.snackBar.open("User has been added successfully!", "Done", {duration: 2000});
          this.loadUsers();
        }, (error)=>{
            console.log(error);        
        });
      }
    });
  }

  updateUser(user: any){
    const updateDialog = this.dialog.open(UserDialogFormComponent, {
      maxWidth: "400px",
      data: user
    });

    updateDialog.afterClosed().subscribe(result => {
      if(result !== null)
      {
        this.userService.updateUserById(user.id, result).subscribe((response)=>{
          this.snackBar.open("User has been updated successfully!", "Done", {duration: 2000});
          this.loadUsers();
        }, (error)=>{
            console.log(error);        
        });
      }
    });
  }

  deleteUser(userID) {
    const deleteDialog = this.dialog.open(DeleteConfirmDialogComponent, {
      maxWidth: "400px",
      data: { ressource: 'user'}
    });

    deleteDialog.afterClosed().subscribe(result => {
      if(result)
      {
        this.userService.deleteUserById(userID).subscribe((response)=>{
          this.snackBar.open("User has been deleted successfully!", "Done", {duration: 2000});
          this.loadUsers();
        }, (error)=>{
            console.log(error);        
        });
      }
    });
  }

  applyFilter(event: Event)
  {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
