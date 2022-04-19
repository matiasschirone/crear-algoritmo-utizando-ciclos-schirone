(async () => {
    const {value: confirmar} = await swal.fire({
    title: "Bienvenido",
    text: '¿Te gustaria recibir informacion de promociones?',
	// html:
	icon:'question',
	confirmButtonText:'Seleccionar',
	footer:'<span class="red">Esta es informacion importante!',
	//width:'70%',
	//padding:'1rem',
	background:'#000',
	// grow:
	backdrop: true,
	// timer:
	// timerProgressBar:
	//toast: true,
	position:'centre',
	allowOutsideClick: false,
	// allowEscapeKey:
	// allowEnterKey:
	// stopKeydownPropagation:

	//input: 'select',
	//inputPlaceholder: 'pais',
	//inputValue: '',
	//inputOptions:{
    //    Argentina: 'argentina',
    //    Uruguay: 'uruguay'
    //},
	
	//  customClass:
	// 	container:
	// 	popup:
	// 	header:
	// 	title:
	// 	closeButton:
	// 	icon:
	// 	image:
	// 	content:
	// 	input:
	// 	actions:
	// 	confirmButton:
	// 	cancelButton:
	// 	footer:	

	showConfirmButton: true,
	confirmButtonColor: '#3E60E9',
	confirmButtonAriaLabel:'confirmar',

	showCancelButton: true,
	cancelButtonText: 'cancelar',
	cancelButtonColor: '#3E60E9',
	cancelButtonAriaLabel:'cancelar',
	
	// buttonsStyling:
	// showCloseButton:
	// closeButtonAriaLabel:


	// imageUrl:
	// imageWidth:
	// imageHeight:
	// imageAlt:
    
    });
    if(confirmar){
        Swal.fire({
			title: 'envianos tu direcion de correo electronico',
			input: 'text',
			inputAttributes: {
			  autocapitalize: 'off'
			},
			showCancelButton: true,
			confirmButtonText: 'confirmar',
			showLoaderOnConfirm: true,
			
				});			
			
    }
	
		const { value: email } = await Swal.fire({
			title: 'Recibiras las ultimas novedades',
			input: 'email',
			inputLabel: 'Your email address',
			inputPlaceholder: 'Enter your email address'
		  })
		  
		  if (email){
			await Swal.fire(`Ingresaste: ${email}`)
			
		  }
		
}) ()

