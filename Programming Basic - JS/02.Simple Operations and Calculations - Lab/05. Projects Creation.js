function projectsCreation(input){

    let name = input.shift();
    let projects = Number(input.shift());

    console.log(`The architect ${name} will need ${Number(projects) * 3} hours to complete ${projects} project/s.`)
}