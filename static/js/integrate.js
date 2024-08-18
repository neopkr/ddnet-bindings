/**
 *             <article class="ddbin-section">
              <h2>Client</h2>
              <div class="section-command">
                <h4>cl_command_test</h4>
                <p>this is the description</p>
                <span>Type: <a href="#">bool</a></span>
              </div>
            </article>

                          <li id="Client-Left">
                <a href="#Client">Client</a>
                  <ul id="Client-Left-ul">
                      <li><a>cl_command_test</a></li>
                      <!-- Agrega más comandos aquí -->
                  </ul>
              </li>
 */


function capitalizeFirstLetter(str) {
    if (str.length === 0) return str; // Manejar cadenas vacías

    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 
 * @param {string} command_name
 * @param {string} parent
 */
function addToLeftNav(parent, command_name) {
    switch (parent) {
        case "Client":
            addNavSingle(parent, command_name);
            break;
        case "Player":
            addNavSingle(parent, command_name);
            break;
        case "Dummy":
            addNavSingle(parent, command_name);
            break;
        case "UI":
            addNavSingle(parent, command_name);
            break;
        case "GFX":
            addNavSingle(parent, command_name);
            break;
        default:
            console.warn("IntegrateError >> ParentNotFound:", parent);
    }

}

function loopAdd(parent, command_parsed) {
    let CommandParent = document.getElementById(parent)
    for(let i = 0; i < command_parsed.length; i++) {
        let commandNode = document.createElement('div');
        commandNode.classList.add('section-command');
        let header = document.createElement("h4");
        let desc = document.createElement("p");
        let types = document.createElement("span");
        let aTypes = document.createElement("a");
        let tags = document.createElement("span");
        
        header.textContent = command_parsed[i]["command"];
        desc.textContent = command_parsed[i]["description"];
        tags.textContent = " | Tags: ";
        
        // Set tags
        if (command_parsed[i]["tags"] != undefined) {
            command_parsed[i]["tags"].forEach((tag, index) => {
                let aTag = document.createElement("a");
                aTag.textContent = tag;
                aTag.href = `#tags-${tag}`;
                tags.appendChild(aTag);
    
                // Add a space after each tag except the last one
                if (index < command_parsed[i]["tags"].length - 1) {
                    tags.appendChild(document.createTextNode(' '));
                }
            });
        } else {
            tags.textContent += "unknown";
        }

        switch (command_parsed[i]["type"]) {
            case undefined:
                types.textContent = "unknown";
                break;
            case "bool":
                aTypes.href = `#type-bool`;
                aTypes.textContent = "bool";
                types.textContent = "Type: ";
                types.appendChild(aTypes);
                break;
            case "str":
                aTypes.href = `#type-str`;
                aTypes.textContent = "string";
                types.textContent = "Type: ";
                types.appendChild(aTypes);
                break;
            case "hex":
                aTypes.href = `#type-hex`;
                aTypes.textContent = "hex";
                types.textContent = "Type: ";
                types.appendChild(aTypes);
                break;
            case "int":
                let contentToAdd = "";
                if (command_parsed[i]["min"] != undefined && command_parsed[i]["max"] != undefined) {
                    contentToAdd = ` | Min: ${command_parsed[i]["min"]}, Max: ${command_parsed[i]["max"]}`;
                }
                aTypes.href = `#type-int`;
                aTypes.textContent = "int" + contentToAdd;
                types.textContent = "Type: ";
                types.appendChild(aTypes);
                break;
        }

        // Add
        commandNode.appendChild(header);
        commandNode.appendChild(desc);
        commandNode.appendChild(types);
        commandNode.appendChild(tags);
        commandNode.id = command_parsed[i]["command"];
        CommandParent.appendChild(commandNode);
        addToLeftNav(command_parsed[0]["parent"], command_parsed[i]["command"]);
    }
}

function addNavSingle(parent, command_name) {
    let ul = document.getElementById(`${parent}-Left-ul`);
    let li = document.createElement('li');
    let a = document.createElement('a');

    a.textContent = command_name;
    a.href = `#${command_name}`;
    li.appendChild(a);
    ul.appendChild(li);
}

function addToPage() {
    const client = parser(CL_COMMANDS);
    const player = parser(PLAYER_COMMANDS);
    const dummy = parser(DUMMY_COMMANDS);
    const ui = parser(UI_COMMANDS);
    const gfx = parser(GFX_COMMANDS);
    // Add more

    //console.log(client[0]["parent"], player[0]["parent"], dummy[0]["parent"], ui[0]["parent"], gfx[0]["parent"])

    loopAdd(client[0]["parent"], client);
    loopAdd(player[0]["parent"], player);
    loopAdd(dummy[0]["parent"], dummy);
    loopAdd(ui[0]["parent"], ui);
    loopAdd(gfx[0]["parent"], gfx);

}


const version = document.getElementById('game-version');
version.textContent = `Game Version: ${GAME_VERSION}`;
addToPage();