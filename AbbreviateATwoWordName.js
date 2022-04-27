function abbrevName(name) {

    // code away
    let abbrev = "";
    for (let i = 0; i < name.length; i++) {
        if (name[i] == " ") {
            abbrev += name[0];
            abbrev += "." + name[i + 1];
        }
    }
    return abbrev.toUpperCase();
}