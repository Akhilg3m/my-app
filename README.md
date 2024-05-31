
Angular:
--------
    Angular is a Framework to build single page applicaitons(SPA).


    Framework: Combination of languages and libraries.

        HTML, CSS, JS, TS, Rxjs, Zone.js


    SPA: Only one html page, 
         Part of page will change W.R.T user activity.

         Ex: Gmail, Facebook


    SETUP:
    ------
    1) Download and install nodejs

        node -v (test)
        npm -v (test)

    2) Install angular 

        npm install -g @angular/cli@14
    
        ng version (test)

    3) Create new app

        ng new my-app

    4) Start the server

        cd my-app
        ng serve


    Running Scripts Blocked:
    -----------------------
    1) open powershell as administrator
    2) command
        set-executionPolicy unrestricted



Project Segregation:
--------------------

Angular Concepts:
-----------------



Routing:
--------

    Routing helps us to navigate b/w one view to another view in SPA.

    Implementation:
    ---------------
        1) Create routes in app-routing.module.ts 
        2) Load router output in app.component.html
                <router-outlet></router-outlet>

        
    4 types of Routes:
   --------------------

        1) General Route:

            {path:'login', }

        2) Empty Route: 

            {path:'', }

        3) Fallback Route / Wildcard Route:

            {path:'**', }

        4) Children Route


            {path:'dashboard', component:XXX, children:[
                {path:'welcome',},
                {path:'home'}
            ]}


            **) router outlet tag in dashboard right section


        ===> note for routeLInk


    Angular Architecture:
    ---------------------


        Data Binding:  Exchanging data b/w class and template.
        -------------

            One way data binding

                1. Interpolation        ts->html         {{ }}
                2. Property binding     ts->html         []=""
                3. Event Binding        html->ts         ()=""

            Two way data bidning 

                a. import forms module
                b. use [(ngModel)] at input


Git:
----

    1) Link laptop and website

        git config --global user.name 'XXXXX'
        git config --global user.email 'XXXXX'

    2) Link project and repository

        git init
        git remote add origin XXXXXX

    3) Upload the changes

        git add .
        git commit -m "XXXXX"
        git push

        

    Directives:  Useful to alter the DOM.
    ===========

        3 types:
        --------
            1) Stuctural Directives
            2) Attribute Directives
            3) Component Directives

        1) Structural Directives: Alters the DOM structure
        -------------------------

            *ngFor: iteratively add new elements to DOM.
            -------

                <tr *ngFor="let user of users; let i=index">

            *ngIf: Conditionally show or hide element in DOM.
            ------

                <h1 *ngIf="CONDITION">

        2) Attrivute Directives: Alters attribute value dynamically.
        ------------------------ 

            [ngStyle]:
            ----------
                <td [ngStyle]="{ 'color':  CONDITION ? 'red' : 'blue' }"

            [ngClass]:
            ----------
                <td [ngClass]="{ 'class1': CONDITION, 'class2':CONDITION }">

        3) Component Ditectives: Add new elements to the DOM.
        ------------------------

            ***) In angular directives are superset, components are subset.
