
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

    git add .                      changes->stagedchanges
    git commit -m "XXXXXXX"        staged change 0
    git push                       100% upload and check in website

        

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



    Pipes:
    ------
      Useful to transform data from one format to another format.

      ***) It won't change the variable value
           
      Ex:   {{ name | uppercase }}
                     lowercase

            {{ user | json }}

            {{ date | date:'yyyy-MM-dd' }}

    
     Custom Pipe:
     ------------

        1) Create:
        ---------

            ng g p balance

        2) Implement:
        -------------

            return "Rs." + value + "/-";

        3) Apply:
        ---------

            {{ amount | balance }}



    Synchronous Execution: Line by Line execution
    ---------------------

    Asynchronous Execution: Parallel exeecution
    -----------------------

    RXJS:
    -----

        Responsible for all Async operators

        3 features

            1. promise
            2. obserable
            3. subject

                        PROMISE                  OBSERVABLE
                        -------                 -------------

            1. single callback                 multiple callbacks

            2. Data in single chunk            stream of data

            3. We can not stop in b/w          we can stop in between using 
                                               unsubscribe method.

            4. less rxjs operator support      more support


                        OBSERVABLE                 SUBJECT
                        ----------                 -------

            1.  unicasting                        multicasting

            2.  maintains state                   does not maintain state


    HTTP(API Integration):
    ---------------------


        DataFlow:
        ---------



        Implementation:
        ---------------
        0) create vehicle component and service.

        1) import HTTPClientModule

            import {HTTPClientModule} from @angular/common/http;

        2) Inject HttpClient service in vehicle service

        3) Do api call with get method

        4) Inject vehicle service in vehicle component

        5) Subscrbe to observable in component ts

        6) display data in html




    All Possible API Calls:
    -----------------------

    1)  all             get            get( url )

    2)  specific        get            get( url/id )

    3)  filter          get            get( url?filter=red )

    4)  pagination      get            get( url?limit=10&page=1 )

    5)  sorting         get            get( url?sortBy=color&order=asc )
                                                                   desc

    6)  create          post           post( url, data )

    7)  update          put            put( url/id, data )


    8)  delete          delete         delete( url/id )



    Angular Forms:
    --------------

        2 types of forms

            1) template driven forms
            2) reactive forms

        ***) reactive forms provides more features like
                form arrays
                nested form groups
                dynamic forms
                custom validations
                dynamically adding and removing controls
                different state like touched, dirty, invalid etc...


        Reactive Forms Concepts:
        ------------------------
        1) FormGroup
        2) Nested FormGroup
        3) Form Array
        4) Dynamic Forms
        5) Form Validations
        6) Custom Validators

             
        Implementation:
        ---------------
        1) import ReactiveFormsModule
        2) Create FormGroup in class.
        3) Create form in template.
        4) Map the inputs with form controls.
        5) console form value and check.


        FormValidations:
        ----------------

        TS:
        ---

            age: new FormControl(null, [Validators.requried, Validatros.min(0)]);


        HTML:
        -----

            <div *ngIf="CONTROL.touched && CONTROL.invalid">

                <p *ngIf="CONTROL?.errors?.['required']"> XXXX </p>

            </div>

        FormGroup:        userForm.get('name')
        NestedFormGroup:  userForm.get('address')?.get('pincode')
        FormArray:        cardsFormArray.controls[i]?.get('cvv')


        COMMUNICATIONS:
        ===============

        1) Page Communication
        2) Component Communication
        3) Module Communication


        1) Page Communication:
        ----------------------

            1) create param in path
            2) set value to param from table component
            3) get value from details component using activated route service

            applications: view/details pages, edit

        2) Component Communication:
        ---------------------------

            1) Parent to child
            2) Child to parent
            3) Sibling communication



            parent.html
            -----------


                <app-child [ac]="10" (bEvent)="catch($event)">


            child.ts
            --------

                @Input() public ac:string = "";


                @Output() public bEvent:EventEmitter<any> = new EventEmitter();
                send(){
                    this.bEvent.emit(20);
                }



            Sibling Communication:
            ======================



        3) MODULE COMMUINICATION:
        -------------------------

            1. Eager Loading
            2. Lazy Loading
            3. Pre Loading

            1. Eager Loading:
            ----------------

                a. create feature module
                b. import feature module in app module

                
                => Cause initial load delay

            2. Lazy Loading:
            ----------------

                a. create feature module with routing module
                    ng g m payments --routing=true
                b. configure lazy loading route in app-routing.module
                    {
                        path: 'payments',
                        loadChildren: .........
                    }

            3. Pre Loading: 
            --------------- 
                Lazy loading modules will be donwloaded 
                immediatly after 
                eager loading modules have finished downloading.

                app-routing.module.ts => 
                    RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})











        
        



        1) Rating component

            <app-rating [rating]="3" (ratingChange)="function()"></app-rating>

        2) Textarea

            <app-textarea [max]="100 "></app-textarea>

        3) Likes

            <app-likes [sad]="20" [angry]="30"></app-lilkes>
