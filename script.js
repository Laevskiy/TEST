
jQuery(document).ready(function($){
    var enter,out,chbox,ent,resultat;
	let data = [
    "affenpinscher",
    "whippet",
    "african",
    "irish wolfhound",
    "pembroke",
    "airedale",
    "NEWFOUNDLAND",
    "OTTERHOUND",
    "PAPILLON",
    "PEKINESE",
    "SWISS MOUNTAIN",
    "weimaraner",
    "MINIATURE PINSCHER",
    "akita",
    "GERMAN POINTER",
    "vizsla",
    "POMERANIAN",
    "appenzeller",
    "MINIATURE POODLE",
    "yorkshire terrier",
    "STANDARD POODLE",
    "basenji",
    "BERNESE MOUNTAIN",
    "wheaten terrier",
    "TOY POODLE",
    "beagle",
    "MEXICANHAIRLESS",
    "westhighland terrier",
    "PUG",
    "bluetick",
    "TIBETAN MASTIFF",
    "toy terrier",
    "PYRENEES",
    "borzoi",
    "BULL MASTIFF",
    "tibetan terrier",
    "REDBONE",
    "bouvier",
    "MALTESE",
    "silky terrier",
    "CHESAPEAKE RETRIEVER",
    "boxer",
    "MALINOIS",
    "sealyham terrier",
    "CURLY RETRIEVER",
    "brabancon",
    "MALAMUTE",
    "scottish terrier",
    "FLATCOATED RETRIEVER",
    "briard",
    "LHASA",
    "patterdale terrier",
    "GOLDEN RETRIEVER",
    "boston bulldog",
    "LEONBERG",
    "norwich terrier",
    "RHODESIAN RIDGEBACK",
    "french bulldog",
    "LABRADOR",
    "norfolk terrier",
    "ROTTWEILER",
    "staffordshire bullterrier",
    "KUVASZ",
    "lakeland terrier",
    "SALUKI",
    "cairn",
    "KOMONDOR",
    "kerryblue terrier",
    "SAMOYED",
    "chihuahua",
    "KELPIE",
    "irish terrier",
    "SCHIPPERKE",
    "chow",
    "KEESHOND",
    "fox terrier",
    "GIANT SCHNAUZER",
    "clumber",
    "HUSKY",
    "dandie terrier",
    "MINIATURE SCHNAUZER",
    "border collie",
    "WALKER HOUND",
    "border terrier",
    "ENGLISH SETTER",
    "coonhound",
    "ENGLISH HOUND",
    "bedlington terrier",
    "GORDON SETTER",
    "cardigan corgi",
    "BLOOD HOUND",
    "australian terrier",
    "IRISH SETTER",
    "dachshund",
    "BASSET HOUND",
    "american terrier",
    "ENGLISH SHEEPDOG",
    "great dane",
    "AFGHAN HOUND",
    "stbernard",
    "SHETLAND SHEEPDOG",
    "scottish deerhound",
    "IBIZAN HOUND",
    "english springer",
    "SHIBA",
    "dhole",
    "GROENENDAEL",
    "welsh spaniel",
    "SHIHTZU",
    "dingo",
    "ITALIAN GREYHOUND",
    "sussex spaniel",
    "BLENHEIM SPANIEL",
    "doberman",
    "GERMANSHEPHERD",
    "japanese spaniel",
    "BRITTANY SPANIEL",
    "norwegian elkhound",
    "ESKIMO",
    "irish spaniel",
    "COCKER SPANIEL",
    "entlebucher",
    "ENTLEBUCHER",
    "cocker spaniel",
    "IRISH SPANIEL",
    "eskimo",
    "NORWEGIAN ELKHOUND",
    "brittany spaniel",
    "JAPANESE SPANIEL",
    "germanshepherd",
    "DOBERMAN",
    "blenheim spaniel",
    "SUSSEX SPANIEL",
    "italian greyhound",
    "DINGO",
    "shihtzu",
    "WELSH SPANIEL",
    "groenendael",
    "DHOLE",
    "shiba",
    "ENGLISH SPRINGER",
    "Ibizan hound",
    "SCOTTISH DEERHOUND",
    "shetland sheepdog",
    "STBERNARD",
    "afghan hound",
    "GREAT DANE",
    "english sheepdog",
    "AMERICAN TERRIER",
    "basset hound",
    "DACHSHUND",
    "irish setter",
    "AUSTRALIAN TERRIER",
    "blood hound",
    "CARDIGAN CORGI",
    "gordon setter",
    "BEDLINGTON TERRIER",
    "english hound",
    "COONHOUND",
    "english setter",
    "BORDER TERRIER",
    "walker hound",
    "BORDER COLLIE",
    "miniature schnauzer",
    "DANDIE TERRIER",
    "husky",
    "CLUMBER",
    "giant schnauzer",
    "FOX TERRIER",
    "keeshond",
    "CHOW",
    "schipperke",
    "IRISH TERRIER",
    "kelpie",
    "CHIHUAHUA",
    "samoyed",
    "KERRYBLUE TERRIER",
    "komondor",
    "CAIRN",
    "saluki",
    "LAKELAND TERRIER",
    "kuvasz",
    "STAFFORDSHIRE BULLTERRIER",
    "rottweiler",
    "NORFOLK TERRIER",
    "labrador",
    "FRENCH BULLDOG",
    "rhodesian ridgeback",
    "NORWICH TERRIER",
    "leonberg",
    "BOSTON BULLDOG",
    "golden retriever",
    "PATTERDALE TERRIER",
    "lhasa",
    "BRIARD",
    "flatcoated retriever",
    "SCOTTISH TERRIER",
    "malamute",
    "BRABANCON",
    "curly retriever",
    "SEALYHAM TERRIER",
    "malinois",
    "BOXER",
    "chesapeake retriever",
    "SILKY TERRIER",
    "maltese",
    "BOUVIER",
    "redbone",
    "TIBETAN TERRIER",
    "bull mastiff",
    "BORZOI",
    "pyrenees",
    "TOY TERRIER",
    "tibetan mastiff",
    "BLUETICK",
    "pug",
    "WESTHIGHLAND TERRIER",
    "mexicanhairless",
    "BEAGLE",
    "toy poodle",
    "WHEATEN TERRIER",
    "bernese mountain",
    "BASENJI",
    "standard poodle",
    "YORKSHIRE TERRIER",
    "miniature poodle",
    "APPENZELLER",
    "pomeranian",
    "VIZSLA",
    "german pointer",
    "AKITA",
    "miniature pinscher",
    "WEIMARANER",
    "swiss mountain",
    "AIREDALE",
    "pekinese",
    "WHIPPET",
    "papillon",
    "AFRICAN",
    "otterhound",
    "IRISH WOLFHOUND",
    "newfoundland",
    "PEMBROKE",
    "AFFENPINSCHER"
  ];
	jQuery('input[type="checkbox"]').on('change', function(){
 
	chbox = jQuery(this).prop('checked')
	
		
	if(chbox == true)
		
		alert('Чувствительный регистр - выбран');
	else 
		alert('Чувствительный регистр - отключон');
	
	});
	
	jQuery('#one').on('click', function first(){
		ent = jQuery('#vvod').val();
		ent = parseInt(ent);
		
		let new_1 = [];
		for (let itm of data) {
			if(itm.length >= ent){
				new_1.push(itm)
			}
		}
		
		
		jQuery('#resultat').html(new_1.join("<br>"))
		
		
	
		
	});

	jQuery('#two').on('click', function second(){
		ent = jQuery('#vvod').val()
	if(chbox == true){
		
		let new_1 = [];
		for (let itm of data) {
			if(itm.indexOf(ent) != -1){
			new_1.push(itm)}
			
		}
		jQuery('#resultat').html(new_1.join("<br>"))
		
	}else{
		let new_1 = [];
		for (let itm of data) {
			itm_1 = itm.toUpperCase()
			if(itm_1.indexOf(ent.toUpperCase()) != -1){
			new_1.push(itm)}
			
		}
		jQuery('#resultat').html(new_1.join("<br>"))
	}
	
	});	
	
		
    

});








