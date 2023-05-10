var All_Professions;
(function (All_Professions) {
    All_Professions[All_Professions["Engineer"] = 0] = "Engineer";
    All_Professions[All_Professions["Doctor"] = 1] = "Doctor";
    All_Professions[All_Professions["Teacher"] = 2] = "Teacher";
    All_Professions[All_Professions["Singer"] = 3] = "Singer";
})(All_Professions || (All_Professions = {}));
;
var profession = All_Professions.Engineer;
console.log(All_Professions);
console.log(profession);
console.log(All_Professions[2]);
