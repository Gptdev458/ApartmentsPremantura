export type Language = 'en' | 'hr' | 'de' | 'ru';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    features: string;
    gallery: string;
    location: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    livingSpace: string;
    privateGardens: string;
    parking: string;
    contactUs: string;
    viewPlans: string;
  };
  
  // Highlights Section
  highlights: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    features: {
      spaces: {
        title: string;
        description: string;
      };
      gardens: {
        title: string;
        description: string;
      };
      parking: {
        title: string;
        description: string;
      };
      location: {
        title: string;
        description: string;
      };
    };
    cta: {
      description: string;
      button: string;
    };
  };
  
  // Construction Gallery
  construction: {
    title: string;
    description: string;
    altText: string;
    enlargedAlt: string;
  };
  
  // Renders Section
  renders: {
    title: string;
    description: string;
    categories: {
      living: string;
      bedroom: string;
      bathroom: string;
      layout: string;
    };
    altText: string;
  };
  
  // Location Section
  locationSection: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    features: {
      address: {
        title: string;
        description: string;
      };
      beaches: {
        title: string;
        description: string;
      };
      heritage: {
        title: string;
        description: string;
      };
    };
    proximity: {
      beach: string;
      center: string;
      pula: string;
      dining: string;
    };
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    description: string;
    form: {
      title: string;
      subtitle: string;
      name: string;
      email: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      sending: string;
      sendMessage: string;
      successTitle: string;
      successMessage: string;
      errorTitle: string;
      errorMessage: string;
    };
    info: {
      title: string;
      phone: string;
      email: string;
      location: string;
    };
  };
  
  // Footer
  footer: {
    description: string;
    copyright: string;
  };
  
  // Meta
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      features: "Features",
      gallery: "Gallery",
      location: "Location",
      contact: "Contact"
    },
    hero: {
      title: "Modern Living in",
      subtitle: "Premantura",
      description: "Quality apartments in the center of Premantura",
      livingSpace: "80m² Living Space",
      privateGardens: "Private Gardens",
      parking: "Parking",
      contactUs: "Contact Us",
      viewPlans: "View Plans"
    },
    highlights: {
      badge: "Premium Features",
      title: "Distinctive",
      subtitle: "Excellence",
      description: "Every detail has been carefully considered to deliver an uncompromising living experience that exceeds expectations.",
      features: {
        spaces: {
          title: "Generous 80m² Spaces",
          description: "Thoughtfully designed apartments with premium finishes, high ceilings, and abundant natural light throughout every room."
        },
        gardens: {
          title: "Private Garden Retreats",
          description: "Exclusive outdoor sanctuaries designed for entertaining, relaxation, and cultivating your personal oasis in the Mediterranean climate."
        },
        parking: {
          title: "Convenient Parking",
          description: "Dedicated parking spaces included with each apartment for your convenience and peace of mind."
        },
        location: {
          title: "Coveted Address",
          description: "Situated in Premantura's most desirable location, offering unparalleled access to pristine beaches, fine dining, and cultural attractions."
        }
      },
      cta: {
        description: "Experience modern living where quality meets functionality in perfect harmony.",
        button: "Contact Us"
      }
    },
    construction: {
      title: "Construction Progress",
      description: "Follow the progress of our Premantura apartments as they take shape.",
      altText: "Construction progress",
      enlargedAlt: "Construction progress enlarged"
    },
    renders: {
      title: "Apartment Plans & Renders",
      description: "Explore detailed floor plans and interior renderings of our modern apartments.",
      categories: {
        living: "Living Room",
        bedroom: "Bedroom",
        bathroom: "Bathroom",
        layout: "Floor Plans"
      },
      altText: "render"
    },
    locationSection: {
      badge: "Prime Location",
      title: "Perfect",
      subtitle: "Location",
      description: "Discover the perfect harmony of coastal serenity and urban sophistication. Our exclusive address places you at the epicenter of Premantura's most desirable lifestyle.",
      features: {
        address: {
          title: "Prestigious Address",
          description: "Situated in Premantura's most coveted residential enclave, offering exclusivity and tranquility."
        },
        beaches: {
          title: "Pristine Beaches",
          description: "Moments away from Croatia's most spectacular Adriatic coastline and crystal-clear waters."
        },
        heritage: {
          title: "Cultural Heritage",
          description: "Rich cultural attractions, acclaimed restaurants, and vibrant local community at your doorstep."
        }
      },
      proximity: {
        beach: "Pristine Beach",
        center: "Town Center",
        pula: "Historic Pula",
        dining: "Fine Dining"
      }
    },
    contact: {
      title: "Connect",
      subtitle: "With Us",
      description: "Get in touch to learn more about these quality apartments in Premantura.",
      form: {
        title: "Contact Us",
        subtitle: "Send us a message about the apartments",
        name: "Full Name *",
        email: "Email Address *",
        message: "Your Message",
        namePlaceholder: "Enter your full name",
        emailPlaceholder: "your.email@example.com",
        messagePlaceholder: "Tell us about your ideal living space and any specific requirements...",
        sending: "Sending...",
        sendMessage: "Send Message",
        successTitle: "Thank you for your message!",
        successMessage: "We will contact you within 24 hours.",
        errorTitle: "Unable to send your message",
        errorMessage: "Please try again or contact us directly."
      },
      info: {
        title: "Contact Information",
        phone: "Phone",
        email: "Email",
        location: "Location"
      }
    },
    footer: {
      description: "Quality apartments with private gardens and parking.",
      copyright: "All rights reserved."
    },
    meta: {
      title: "Premantura Apartments - Modern Living in Croatia",
      description: "Exclusive apartments in the center of Premantura. 80m² living space, private gardens, secured parking. Perfect for families or investment.",
      keywords: "apartments, Premantura, Croatia, real estate, investment, vacation home"
    }
  },
  
  hr: {
    nav: {
      home: "Početna",
      features: "Mogućnosti",
      gallery: "Galerija",
      location: "Lokacija",
      contact: "Kontakt"
    },
    hero: {
      title: "Suvremeno stanovanje u",
      subtitle: "Premanuturi",
      description: "Kvalitetni apartmani u centru Premanture",
      livingSpace: "80m² stambenog prostora",
      privateGardens: "Privatni vrtovi",
      parking: "Parkirno mjesto",
      contactUs: "Kontaktirajte nas",
      viewPlans: "Pogledajte planove"
    },
    highlights: {
      badge: "Vrhunske mogućnosti",
      title: "Neprocjenjiva",
      subtitle: "kvaliteta",
      description: "Svaki detalj je pažljivo osmišljen kako bi se postiglo neusporedivo iskustvo stanovanja koje nadmašuje sva očekivanja.",
      features: {
        spaces: {
          title: "Prostrani stanovi od 80m²",
          description: "Promišljeno osmišljeni apartmani s luksuznom opremom, visokim stropovima i obiljem prirodne svjetlosti u svakoj prostoriji."
        },
        gardens: {
          title: "Privatne vrtne oaze",
          description: "Ekskluzivni vanjski prostori stvoreni za druženje, opuštanje i uređenje Vaše osobne oaze u mediteranskom ambijentu."
        },
        parking: {
          title: "Osigurana parkirna mjesta",
          description: "Rezervirana parkirna mjesta uključena uz svaki apartman za Vašu praktičnost i sigurnost."
        },
        location: {
          title: "Privilegirana lokacija",
          description: "Smješten na najprestižnijoj lokaciji u Premanuturi s neusporedivim pristupom netaknutim plažama, vrhunskim restoranima i kulturnim znamenitostima."
        }
      },
      cta: {
        description: "Doživite suvremeno stanovanje gdje se kvaliteta spaja s funkcionalnim rješenjima u savršenom skladu.",
        button: "Kontaktirajte nas"
      }
    },
    construction: {
      title: "Tijek gradnje",
      description: "Pratite kako nastaju naši apartmani u Premanuturi.",
      altText: "Tijek gradnje",
      enlargedAlt: "Uvećani prikaz tijeka gradnje"
    },
    renders: {
      title: "Planovi stanova i 3D prikazi",
      description: "Pogledajte detaljne tlocrte i unutrašnje vizualizacije naših suvremenih apartmana.",
      categories: {
        living: "Dnevni boravak",
        bedroom: "Spavaća soba",
        bathroom: "Kupaonica",
        layout: "Tlocrti"
      },
      altText: "vizualizacija"
    },
    locationSection: {
      badge: "Idealna lokacija",
      title: "Savršena",
      subtitle: "lokacija",
      description: "Otkrijte jedinstvenu kombinaciju primorskog mira i urbane elegancije. Naša ekskluzivna adresa smješta Vas u srce najtraženijeg životnog stila Premanture.",
      features: {
        address: {
          title: "Prestižna adresa",
          description: "Smješten u najcjenjenijoj stambenoj četvrti Premanture, koja omogućava ekskluzivnost i mir."
        },
        beaches: {
          title: "Kristalno čiste plaže",
          description: "Samo nekoliko koraka od najljepših jadranskih plaža Hrvatske s kristalno čistim morem."
        },
        heritage: {
          title: "Kulturno nasljeđe",
          description: "Kulturne znamenitosti, vrhunski restorani i živahna lokalna zajednica na dohvat ruke."
        }
      },
      proximity: {
        beach: "Plaža kristalno čistog mora",
        center: "Centar mjesta",
        pula: "Povijesna Pula",
        dining: "Gourmet restorani"
      }
    },
    contact: {
      title: "Kontaktirajte",
      subtitle: "nas",
      description: "Kontaktirajte nas za više informacija o ovim kvalitetnim apartmanima u Premanuturi.",
      form: {
        title: "Kontaktirajte nas",
        subtitle: "Pošaljite nam upit o apartmanima",
        name: "Ime i prezime *",
        email: "Email adresa *",
        message: "Vaša poruka",
        namePlaceholder: "Unesite Vaše ime i prezime",
        emailPlaceholder: "Vas.email@example.com",
        messagePlaceholder: "Opišite nam Vaš idealni dom i specifične potrebe...",
        sending: "Šalje se...",
        sendMessage: "Pošaljite poruku",
        successTitle: "Hvala Vam na upitu!",
        successMessage: "Javit ćemo Vam se u roku od 24 sata.",
        errorTitle: "Nismo uspjeli poslati Vašu poruku",
        errorMessage: "Molimo pokušajte ponovo ili nas kontaktirajte izravno."
      },
      info: {
        title: "Kontaktni podaci",
        phone: "Telefon",
        email: "Email",
        location: "Lokacija"
      }
    },
    footer: {
      description: "Kvalitetni apartmani s privatnim vrtovima i sigurnim parkingom.",
      copyright: "Sva prava pridržana."
    },
    meta: {
      title: "Apartmani Premantura - Suvremeno stanovanje u Hrvatskoj",
      description: "Ekskluzivni apartmani u centru Premanture. 80m² stambenog prostora, privatni vrtovi, osigurano parkiranje. Idealno za obitelji ili investiciju.",
      keywords: "apartmani, Premantura, Hrvatska, nekretnine, investicija, kuća za odmor"
    }
  },
  
  de: {
    nav: {
      home: "Startseite",
      features: "Ausstattung",
      gallery: "Galerie",
      location: "Lage",
      contact: "Kontakt"
    },
    hero: {
      title: "Zeitgemäßes Wohnen in",
      subtitle: "Premantura",
      description: "Hochwertige Apartments im Herzen von Premantura",
      livingSpace: "80m² Wohnfläche",
      privateGardens: "Private Gärten",
      parking: "Stellplatz",
      contactUs: "Kontaktieren Sie uns",
      viewPlans: "Grundrisse ansehen"
    },
    highlights: {
      badge: "Exklusive Ausstattung",
      title: "Außergewöhnliche",
      subtitle: "Qualität",
      description: "Jedes Detail wurde sorgfältig durchdacht, um ein erstklassiges Wohngefühl zu schaffen, das alle Erwartungen übertrifft.",
      features: {
        spaces: {
          title: "Großzügige 80m² Wohnungen",
          description: "Sorgfältig geplante Apartments mit hochwertiger Ausstattung, hohen Decken und viel natürlichem Licht in allen Räumen."
        },
        gardens: {
          title: "Private Gartenoasen",
          description: "Exklusive Außenbereiche für gesellige Stunden, Entspannung und die Gestaltung Ihrer persönlichen Ruheoase im mediterranen Ambiente."
        },
        parking: {
          title: "Sichere Stellplätze",
          description: "Reservierte Parkplätze gehören zu jeder Wohnung und bieten Komfort und Sicherheit."
        },
        location: {
          title: "Exklusive Lage",
          description: "In Premanturas prestigeträchtigster Gegend gelegen, mit unvergleichlichem Zugang zu unberührten Stränden, erstklassigen Restaurants und kulturellen Highlights."
        }
      },
      cta: {
        description: "Erleben Sie zeitgemäßes Wohnen, wo sich Qualität und Funktionalität in perfekter Harmonie vereinen.",
        button: "Kontaktieren Sie uns"
      }
    },
    construction: {
      title: "Baufortschritt",
      description: "Verfolgen Sie die Entstehung unserer Apartments in Premantura.",
      altText: "Baufortschritt",
      enlargedAlt: "Vergrößerte Ansicht des Baufortschritts"
    },
    renders: {
      title: "Grundrisse & 3D-Visualisierungen",
      description: "Entdecken Sie detaillierte Grundrisse und realitätsnahe Innenraumvisualisierungen unserer modernen Apartments.",
      categories: {
        living: "Wohnbereich",
        bedroom: "Schlafzimmer",
        bathroom: "Badezimmer",
        layout: "Grundrisse"
      },
      altText: "Visualisierung"
    },
    locationSection: {
      badge: "Erstklassige Lage",
      title: "Perfekte",
      subtitle: "Lage",
      description: "Entdecken Sie die ideale Verbindung von mediterraner Ruhe und urbanem Komfort. Unsere exklusive Adresse bringt Sie in das Herz des begehrten Lebensstils von Premantura.",
      features: {
        address: {
          title: "Prestigeadresse",
          description: "In Premanturas exklusivster Wohngegend gelegen, die Ruhe und Exklusivität bietet."
        },
        beaches: {
          title: "Traumhafte Strände",
          description: "Nur wenige Gehminuten zu Kroatiens schönsten Adriastränden mit kristallklarem Wasser."
        },
        heritage: {
          title: "Kultureller Reichtum",
          description: "Kulturelle Sehenswürdigkeiten, erstklassige Restaurants und eine lebendige Gemeinde direkt vor der Haustür."
        }
      },
      proximity: {
        beach: "Traumstrand",
        center: "Ortszentrum",
        pula: "Historisches Pula",
        dining: "Gourmet-Restaurants"
      }
    },
    contact: {
      title: "Nehmen Sie",
      subtitle: "Kontakt auf",
      description: "Kontaktieren Sie uns für weitere Informationen über diese hochwertigen Apartments in Premantura.",
      form: {
        title: "Kontaktieren Sie uns",
        subtitle: "Senden Sie uns Ihre Anfrage zu den Apartments",
        name: "Vor- und Nachname *",
        email: "E-Mail-Adresse *",
        message: "Ihre Nachricht",
        namePlaceholder: "Geben Sie Ihren vollständigen Namen ein",
        emailPlaceholder: "ihre.email@example.com",
        messagePlaceholder: "Beschreiben Sie uns Ihre Wohnvorstellungen und besonderen Wünsche...",
        sending: "Wird gesendet...",
        sendMessage: "Nachricht senden",
        successTitle: "Vielen Dank für Ihre Anfrage!",
        successMessage: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
        errorTitle: "Nachricht konnte nicht gesendet werden",
        errorMessage: "Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt."
      },
      info: {
        title: "Kontaktdaten",
        phone: "Telefon",
        email: "E-Mail",
        location: "Standort"
      }
    },
    footer: {
      description: "Hochwertige Apartments mit privaten Gärten und sicheren Stellplätzen.",
      copyright: "Alle Rechte vorbehalten."
    },
    meta: {
      title: "Apartments Premantura - Zeitgemäßes Wohnen in Kroatien",
      description: "Exklusive Apartments im Herzen von Premantura. 80m² Wohnfläche, private Gärten, sichere Stellplätze. Ideal für Familien oder als Kapitalanlage.",
      keywords: "Apartments, Premantura, Kroatien, Immobilien, Kapitalanlage, Feriendomizil"
    }
  },
  
  ru: {
    nav: {
      home: "Главная",
      features: "Особенности",
      gallery: "Галерея",
      location: "Расположение",
      contact: "Контакты"
    },
    hero: {
      title: "Современное жильё в",
      subtitle: "Премантуре",
      description: "Качественные апартаменты в центре Премантуры",
      livingSpace: "80м² жилой площади",
      privateGardens: "Приватные сады",
      parking: "Парковочное место",
      contactUs: "Свяжитесь с нами",
      viewPlans: "Посмотреть планировки"
    },
    highlights: {
      badge: "Премиальные характеристики",
      title: "Исключительное",
      subtitle: "качество",
      description: "Каждая деталь тщательно продумана для создания непревзойдённого жилого пространства, превосходящего все ожидания.",
      features: {
        spaces: {
          title: "Просторные апартаменты 80м²",
          description: "Продуманно спроектированные квартиры с премиальной отделкой, высокими потолками и изобилием естественного освещения во всех комнатах."
        },
        gardens: {
          title: "Приватные садовые зоны",
          description: "Эксклюзивные открытые территории для отдыха, развлечений и создания вашего личного уголка в средиземноморской атмосфере."
        },
        parking: {
          title: "Охраняемая парковка",
          description: "Персональные парковочные места включены в стоимость каждой квартиры для вашего комфорта и безопасности."
        },
        location: {
          title: "Престижный адрес",
          description: "Расположен в самом элитном районе Премантуры с беспрецедентным доступом к чистейшим пляжам, ресторанам высокой кухни и культурным достопримечательностям."
        }
      },
      cta: {
        description: "Ощутите современный уровень жизни, где качество гармонично сочетается с функциональностью.",
        button: "Свяжитесь с нами"
      }
    },
    construction: {
      title: "Ход строительства",
      description: "Наблюдайте за возведением наших апартаментов в Премантуре.",
      altText: "Ход строительства",
      enlargedAlt: "Увеличенное изображение хода строительства"
    },
    renders: {
      title: "Планировки и 3D-визуализации",
      description: "Ознакомьтесь с детальными планировками и реалистичными интерьерными визуализациями наших современных апартаментов.",
      categories: {
        living: "Гостиная",
        bedroom: "Спальня",
        bathroom: "Ванная комната",
        layout: "Планировки"
      },
      altText: "визуализация"
    },
    locationSection: {
      badge: "Превосходное расположение",
      title: "Идеальное",
      subtitle: "расположение",
      description: "Откройте для себя совершенное сочетание прибрежного умиротворения и городского комфорта. Наш эксклюзивный адрес располагает вас в центре самого востребованного образа жизни Премантуры.",
      features: {
        address: {
          title: "Престижный адрес",
          description: "Расположен в самом элитном жилом районе Премантуры, обеспечивающем эксклюзивность и покой."
        },
        beaches: {
          title: "Девственные пляжи",
          description: "В нескольких минутах ходьбы от самых красивых адриатических пляжей Хорватии с кристально чистой водой."
        },
        heritage: {
          title: "Культурное богатство",
          description: "Культурные памятники, рестораны высокого класса и активная местная община в шаговой доступности."
        }
      },
      proximity: {
        beach: "Девственный пляж",
        center: "Центр посёлка",
        pula: "Историческая Пула",
        dining: "Высокая кухня"
      }
    },
    contact: {
      title: "Свяжитесь",
      subtitle: "с нами",
      description: "Обратитесь к нам за дополнительной информацией об этих качественных апартаментах в Премантуре.",
      form: {
        title: "Связаться с нами",
        subtitle: "Отправьте нам запрос об апартаментах",
        name: "Имя и фамилия *",
        email: "Адрес электронной почты *",
        message: "Ваше сообщение",
        namePlaceholder: "Введите ваше имя и фамилию",
        emailPlaceholder: "ваш.email@example.com",
        messagePlaceholder: "Расскажите о ваших предпочтениях в жилье и особых требованиях...",
        sending: "Отправляется...",
        sendMessage: "Отправить сообщение",
        successTitle: "Спасибо за ваш запрос!",
        successMessage: "Мы свяжемся с вами в течение 24 часов.",
        errorTitle: "Не удалось отправить сообщение",
        errorMessage: "Пожалуйста, попробуйте ещё раз или свяжитесь с нами напрямую."
      },
      info: {
        title: "Контактная информация",
        phone: "Телефон",
        email: "Электронная почта",
        location: "Местоположение"
      }
    },
    footer: {
      description: "Качественные апартаменты с приватными садами и охраняемой парковкой.",
      copyright: "Все права защищены."
    },
    meta: {
      title: "Апартаменты Премантура - Современное жильё в Хорватии",
      description: "Эксклюзивные апартаменты в центре Премантуры. 80м² жилой площади, приватные сады, охраняемая парковка. Идеально для семей или инвестиций.",
      keywords: "апартаменты, Премантура, Хорватия, недвижимость, инвестиции, дом для отдыха"
    }
  }
};

export const getTranslations = (lang: Language): Translations => {
  return translations[lang] || translations.en;
};

export const isValidLanguage = (lang: string): lang is Language => {
  return ['en', 'hr', 'de', 'ru'].includes(lang);
};