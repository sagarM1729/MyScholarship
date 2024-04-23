function searchFiles() {
    // Get the search query from the input field and convert to lowercase
    var query = document.getElementById('searchInput').value.trim().toLowerCase();
    
    // Define an object mapping search queries to HTML file paths
    var fileMap = {
        "siemens scholarship": "Open/siemens%20scholarship/siemens%20scholarship.html",
        "cummins scholarship": "Open/Cummins%20Scholarship/Cummins%20Scholarship.html",
        "central scheme": "Open/Central%20Scheme/Central%20Scheme.html",
        "pragati scholarship": "Open/Pragati%20Scholarship/Pragati%20Scholarship.html",

        "ntpc scholarship" : "ST/ntpc%20scholarship/ntpc%20scholarship.html",
        "pg scholarships st": "ST/pg%20scholarships%20st/pg%20scholarships%20st.html",
        "tution fee waiver sc": "ST/tution%20fee%20waiver%20sc/tution%20fee%20waiver%20sc.html",
        "vocational education": "ST/vocational%20education/vocational%20education.html",

        "maintenance allowance for sc": "SC/maintenance%20allowance%20for%20sc/maintenance%20allowance%20for%20sc.html",
        "nsp top class education": "SC/nsp%20top%20class%20education/nsp%20top%20class%20education.html",
        "ntpc scholarship" : "SC/ntpc%20scholarship/ntpc%20scholarship.html",
        "vocational training sc": "SC/vocational%20training%20sc/vocational%20training%20sc.html",

        "ambedkar state award": "OBC/ambedkar%20state%20award/ambedkar%20state%20award.html",
        "obc merit scholarship": "OBC/obc%20merit%20scholarship/obc%20merit%20scholarship.html",
        "ongc scholarship": "OBC/ongc%20scholarship/ongc%20scholarship.html",
        "prerna post matric": "OBC/prerna%20post%20matric/prerna%20post%20matric.html",
        "rajarshi shahu maharaj": "OBC/rajarshi%20shahu%20maharaj/rajarshi%20shahu%20maharaj.html",

        "cf sparkle inclusive": "PWD/cf%20sparkle%20inclusive/cf%20sparkle%20inclusive.html",
        "saksham scholarship scheme": "PWD/saksham%20scholarship%20scheme/saksham%20scholarship%20scheme.html",
        "top education": "PWD/top%20education/top%20education.html",
        "uram scholarship program": "PWD/uram%20scholarship%20program/uram%20scholarship%20program.html",

        "foundation for excellence": "VJNT/foundation%20for%20excellence/foundation%20for%20excellence.html",
        "indusInd foundation": "VJNT/indusInd%20foundation/indusInd%20foundation.html",
        "post matric obc": "VJNT/post%20matric%20obc/post%20matric%20obc.html",
        "samsung star": "VJNT/samsung%20star/samsung%20star.html",
        "sitaram jindal": "VJNT/sitaram%20jindal/sitaram%20jindal.html",

   
        
    };

    // Convert all keys in the fileMap object to lowercase
    var lowerCaseFileMap = {};
    for (var key in fileMap) {
        lowerCaseFileMap[key.toLowerCase()] = fileMap[key];
    }

    // Check if the lowercase query exists in the lowercase keys of the fileMap
    if (query.toLowerCase() in lowerCaseFileMap) {
        // If the query exists, redirect to the corresponding HTML file
        window.location.href = lowerCaseFileMap[query.toLowerCase()];
    } else {
        // If the query does not exist, display an error message or handle it as needed
        alert("No matching results found.");
    }
}
