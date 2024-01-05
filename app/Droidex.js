app.SetOnError(OnError); // Pones los posibles errores en OnError
var url="zindex.html"

// Cargar tema de la app
    theme = app.CreateTheme( "Light" );
    theme.AdjustColor( 35, 0, -10 );
    theme.SetBackColor( "#cccccc" );
    theme.SetBtnTextColor( "black" );
    theme.SetButtonOptions( "custom" );
    theme.SetButtonStyle( "white","white",2,"#999999",0,1,"#ff9000" );
    theme.SetCheckBoxOptions( "dark" );
    theme.SetTextEditOptions( "underline" );
    theme.SetDialogColor( "#ffffffff" );
    theme.SetDialogBtnColor( "#ffeeeeee" );
    theme.SetDialogBtnTxtColor( "#ff666666" );
    theme.SetTitleHeight( 42 );
    theme.SetTitleColor( "#ff888888" ); 
    theme.SetTitleDividerColor( "#ff0099CC" );
    theme.SetTextColor( "#ff666666" );
    app.SetTheme( theme );


function OnStart() {    
    // Poner en variable el plugin del codigo
    reader = app.CreateObject( "BarcodeReader" );
    
    // Cambiar el color la barra de tarea, de navegacion y fondo de la app
    app.SetStatusBarColor( "#0E9D00" );
    app.SetNavBarColor( "#0E9D00" );
    app.SetBackColor( "#0E9D00" );
    
    // Poner en modo vertical la app y evitar el modo horizontal
    app.SetOrientation("Portrait");  
    
    app.PreventScreenLock(true); // Bloquear el apagad ode pantalla automatico
    app.EnableBackKey( false ); // Desabilitarl el boton de artas
    
    // Mosrtar en pantalla ventana de carga de html en pantalla completa
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );	
	web = app.CreateWebView( 1.0, 1.0 );
	web.SetOnProgress( web_OnProgess );
	web.LoadUrl( url );
	lay.AddChild( web );
	
	app.AddLayout( lay );
}

function OnError( msg, line, file ) {
    var text =
    'Message: "' + msg + '"\n' +
    'Line: ' + line;
    app.ShowPopup( txt );
     console.log( text, "Received error message:" );
}

function web_OnProgess( progress ) {
	app.Debug( "progress = " + progress );
	if( progress==100 ) app.HideProgress();
}


// Funcion para salir de la app
function OnBack() {
            var sino = app.CreateYesNoDialog( "¿Desea salir de Droidex?" );
            sino.SetButtonText( "Si","No" );
            sino.SetOnTouch(function(result){ if(result=="Yes") app.Exit(); } );
            sino.Show();
            }
            
            function yesNo_OnTouch( result ) {
                if( result=="Yes" ) app.Exit();
                }

// Borra la base de datos (No se usa en la app)
function del() { 
   db.Delete()
}