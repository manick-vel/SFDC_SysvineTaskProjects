import { LightningElement, wire, api } from 'lwc';

import { getRecord } from 'lightning/uiRecordApi';

import LoginModal from 'c/loginModal';
import saveNoteTitleWithDesc from '@salesforce/apex/saveNote.saveNoteTitleWithDesc';
import getNotes from '@salesforce/apex/saveNote.getNotes';
import getTasks from '@salesforce/apex/saveNote.getTasks';
import saveTaskTitleWithDesc from '@salesforce/apex/saveNote.saveTaskTitleWithDesc';

export default class KSNoteTakingApp extends LightningElement {

    //result;
    isShowModal = false;
    isShowNoteModal = false;
    isShowTaskModal = false;
    isShowNoteInput = false;
    isShowTaskInput = false;
    noteTitle = '';
    noteDesc = '';
    allNotes = [];
    taskTitle = '';
    taskDesc = '';
    allTasks = [];
    priorityOptions = [{'label': 'High', 'value': 'High'},
    {'label': 'Medium', 'value': 'Medium'},
    {'label': 'Low', 'value': 'Low'}];
    taskDueDate = new Date('01/01/2024');
    taskPriority = '';
    taskPriorityValue = '';
    
    handleLogin(){
        // console.log(this.class);
        // alert('this is alert')
        // var elements = document.querySelectorAll('.sign-in-one');
        // elements.forEach(element => {
        //     element.style.display = none;
        // });
        // $('.sign-in-one').style.display = none;
        // $('.sigin-in-two').show();
    
        console.log('*******************');
        this.isShowModal = true;
        // LoginModal.open({
        //     // size: 'Large',
        //     // description: 'this is login modal',
        // }).then((result) => {
        //     console.log(result);
        // });
        //this.result = result;
        
        // getAllNotes()
    }

    showNotes(){
        this.getAllNotes();
    }

    getAllNotes(){
        this.isShowNoteModal = true;
        this.isShowTaskModal = false;
        getNotes()
        .then(result => {
            console.log("********************* get Notes");
            console.log(result);
            // this.allNotes = JSON.stringify(result);
            this.allNotes = result;
            console.log('notes -> ' + this.allNotes);
        })
        .catch(error => {
            console.log('error***' + error);
        })
    }

    cancelButton(){
        this.isShowModal = false;
    }

    addNewNote(){
        console.log('*********inside new note');
        this.isShowNoteInput = true;
    }

    saveNoteTitle(){
        this.noteTitle =  event.target.value;
    }

    saveNoteDesc(){
        this.noteDesc =  event.target.value;
    }

    saveNoteButton(){
        // console.log('************** note button **********');
        // console.log(this.noteTitle);
        // console.log(this.noteDesc);

        this.isShowNoteModal = false;

        saveNoteTitleWithDesc({ noteTitle: this.noteTitle, noteDesc: this.noteDesc, isUpdate: false, isDelete: false})
        .then( result => {
            console.log(result);
        }).catch(error => {
            console.log('error***' + error);
        })

        // console.log('coming below imperative apex'); 
    }

    cancelNoteButton(){
        this.isShowNoteInput = false;
    }
    
    // @wire(getNotes)
    // getNotes({data, error}){
    //     if(data){
    //         this.notes = data;
    //         console.log(this.notes);
    //     }
    //     if(error) {
    //         console.log('error*******' + error)
    //     }
    // }

    showTasks(){
    
        this.isShowNoteModal = false;
        this.isShowTaskModal = true;

        console.log('event -> ' + event.target.value);
        this.showTasks = event.target.value;
        console.log('showTasks -> ' + this.showTasks);

        getTasks()
        .then(result => {
            console.log("********************* get Notes");
            console.log(result);
            // this.allNotes = JSON.stringify(result);
            this.allTasks = result;
            console.log('tasks -> ' + this.allTasks);
        })
        .catch(error => {
            console.log('error***' + error);
        })

        return false;
    }


    addNewTask(){
        console.log('*********inside new task');
        this.isShowTaskInput = true;
    }

    saveTaskTitle(){
        this.taskTitle =  event.target.value;
    }

    saveTaskDesc(){
        this.taskDesc =  event.target.value;
    }

    saveTaskDueDate(){
        this.taskDueDate = event.target.value;
    }
    
    saveTaskPriority(){
        this.taskPriority = event.target.value;
        
    }

    saveTaskButton(){
        // console.log('************** note button **********');
        // console.log(this.noteTitle);
        // console.log(this.noteDesc);

        console.log('((( save task button');
        this.isShowTaskModal = false;

        
        console.log(this.taskTitle);
        console.log(this.taskDesc);
        console.log(this.taskDueDate);
        console.log(this.taskPriority);

        saveTaskTitleWithDesc({ taskTitle: this.taskTitle, taskDesc: this.taskDesc, taskDueDate: this.taskDueDate, taskPriority: this.taskPriority, isUpdate: false, isDelete: false})
        .then( result => {
            console.log('** inside task title with desc');
            console.log(result);
        }).catch(error => {
            console.log('error***' + error);
        })

        // console.log('coming below imperative apex'); 
    }

    cancelTaskButton(){
        this.isShowTaskInput = false;
    }

    // @api
    // get taskPriorityValue(){
    //     return this.taskPriorityValue;
    // }
    // set taskPriorityValue(value){
    //     this.taskPriorityValue = value;
    // }
}