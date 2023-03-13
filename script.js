var firstName = [  'Amelia',  'Sophia',  'Ava',  'Isabella',  'Mia',  'Charlotte',  'Luna',  
'Olivia',  'Harper',  'Emma',  'Evelyn',  'Abigail',  'Emily',  'Ella',  'Madison',
  'Elizabeth',  'Sofia',  'Avery',  'Eleanor',  'Chloe',  'Layla',  'Grace',  'Natalie', 
   'Elena',  'Victoria',  'Addison',  'Aria',  'Lily',  'Aubrey',  'Hannah',  'Stella',  
   'Paisley',  'Bella',  'Zoe',  'Ellie',  'Aurora',  'Leah',  'Violet',  'Savannah', 
    'Audrey',  'Brooklyn',  'Brielle',  'Genesis',  'Skylar',  'Claire',  'Lucy',  'Nova', 
     'Penelope',  'Maya',  'Emilia',  'Autumn',  'Kinsley',  'Naomi',  'Aaliyah',  'Aurora', 
      'Arianna',  'Gabriella',  'Makayla',  'Adalyn',  'Willow',  'Kaylee',  'Madelyn',  'Aubree', 
       'Peyton',  'Hazel',  'Katherine',  'Elliana',  'Gianna',  'Addilyn',  'Isla',  'Anastasia',
         'Ivy',  'Maria',  'Zara',  'Vivian',  'Reagan',  'Mila',  'Raelynn',  'Clara',  'Summer', 
          'Sadie',  'Serenity',  'Poppy',  'Liliana',  'Alice',  'Josephine',  'Everly',  'Lydia',  
          'Briar',  'Rylee',  'Adeline',  'Evangeline',  'Jade',  'Athena',  'Julia',  'Charlie',  
          'Daisy',  'Elsie',  'Hope',  'Lola'];


var lastName = [  'Smith',  'Johnson',  'Williams',  'Jones',  'Brown', 
 'Garcia',  'Miller',  'Davis',  'Rodriguez',  'Martinez',  'Hernandez',
   'Lopez',  'Gonzalez',  'Perez',  'Sanchez',  'Jackson',  'Lee',  'Collins',  
   'Young',  'Taylor',  'Clark',  'Hall',  'Allen',  'Wright',  'King',  'Scott', 
    'Baker',  'Nelson',  'Carter',  'Mitchell',  'Turner',  'Phillips',  'Campbell', 
     'Parker',  'Evans',  'Edwards',  'Cooper',  'Morris',  'Reed',  'Murphy',  'Rivera',
       'Cook',  'Bailey',  'Bell',  'Gomez',  'Morgan',  'Foster',  'Cruz',  'Castillo', 
        'Ramirez',  'Hill',  'Brooks',  'Fisher',  'Gardner',  'Stone',  'Ramos',  'Reyes',
          'West',  'Jordan',  'Owens',  'Reynolds',  'Ferguson',  'Bryant',  'Alexander',  
          'Russell',  'Griffin',  'Diaz',  'Hayes',  'Myers',  'Ford',  'Hamilton',  'Graham', 
           'Sullivan',  'Wallace',  'Woods',  'Coleman',  'Morales',  'Kim',  'Chapman',  'Franklin',
             'Lawrence',  'Kennedy',  'Murray',  'Freeman',  'Pierce',  'Higgins',  'Porter',  'Hunter'];

function getName()
{
   var randomName= firstName[Math.floor(Math.random() * firstName.length)] + ' '+
   lastName[Math.floor(Math.random() * lastName.length)];
   return randomName;


}

function nameQty() 
{
  var userQut = document.querySelector('.qty').value;
  if(userQut > 10)
  {
    document.querySelector('.nameList').innerHTML = 'ONLY 10 NAME CAN BE GENRATE';

  }
  else
  {
    for( var i=0; i<userQut ;i++)
    {
      document.querySelector('.nameList').innerHTML += getName() + '<br>'; 
    }
    
  }
  
}