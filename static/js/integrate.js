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

function loopAdd(parent, command_parsed, div = undefined, isTag = false) {
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

        // Add to the correct place based on isTag
        if (!isTag) {
            commandNode.id = command_parsed[i]["command"];
            document.getElementById(parent).appendChild(commandNode);
            addToLeftNav(parent, command_parsed[i]["command"]);
        } else {
            commandNode.id = `${command_parsed[i]["command"]}_is_tag`;
            div.appendChild(commandNode);
        }
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

    // Loop over each category
    loopAdd(client[0]["parent"], client);
    loopAdd(player[0]["parent"], player);
    loopAdd(dummy[0]["parent"], dummy);
    loopAdd(ui[0]["parent"], ui);
    loopAdd(gfx[0]["parent"], gfx);

    // Create the tags sections <h2 class="ddbin-section-header">Client</h2>
    DDBIN_TAGS.forEach((e) => {
        let div = document.createElement('div');
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let i = document.createElement('i');
        let div_clip = document.createElement('div');
        let span_clip = document.createElement('span');

        span_clip.textContent = "Copy to clipboard";
        span_clip.classList.add("tooltiptext");
        span_clip.id = "tooltip-display";
        div_clip.classList.add('tooltip');
        i.classList.add("bi", "bi-tags", "icon-size-tag");
        i.appendChild(span_clip);
        i.onclick = tag_on_click();
        div_clip.appendChild(i);
        div_clip.style.display = "inline";
        div_clip.style.cursor = "pointer"
        h2.textContent = e + " ";
        h2.appendChild(div_clip);
        
        h2.classList.add("ddbin-section-header");
        div.classList.add(`tags-${e}`);
        div.id = `tags-${e}`;
        article.id = `${e}-filter-tag`;
        article.classList.add('ddbin-section');
        article.appendChild(h2);
        div.appendChild(article);
        document.querySelector(".tags").appendChild(div);

        // Add only matching commands to the tag section
        client.forEach((j) => {
            if (j["tags"] && j["tags"].includes(e)) {
                loopAdd(undefined, [j], article, true);
            }
        });
    });
}
// ddbin-nav-tag , <li class="tag-section" id="tag-test"><a href="#test">Test</a></li>
// Add Tags
DDBIN_TAGS.forEach((e) => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = e;
    a.href = `#tags-${e}`;
    li.classList.add("tag-section");
    li.appendChild(a);
    document.querySelector(".ddbin-nav-tag").appendChild(li);
});

// Create the tag section // parent: tags
/*
              <div class="tags-client">
                <article id="client-filter-tag" class="ddbin-section">
                  <h2 class="ddbin-section-header">Client</h2>
                  <div class="section-command">
                    <h4>cl_command_test</h4>
                    <p>this is the description</p>
                    <span>Type: <a href="#">bool</a></span>
                    <span>Tags: Cient</span>
                  </div>
                </article>
              </div>
*/


function tag_on_click(text) {
    /*
    navigator.clipboard.writeText(`localhost:8080/${text}`);
    console.log(document.getElementById("tooltip-display"))
    var tooltip = document.getElementById("tooltip-display");
    tooltip.textContent = "Copied: " + document.URL;
    
    make work this
    
    */
   
}

const version = document.getElementById('game-version');
version.textContent = `Game Version: ${GAME_VERSION}`;
addToPage();

// Add to search
const options = GetAllCommands();

function showSuggestions() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toLowerCase();
  const suggestions = document.getElementById('suggestions');
  
  // Limpiar las sugerencias anteriores
  suggestions.innerHTML = '';

  if (filter.length > 0) {
    // Filtrar las opciones basadas en la entrada del usuario
    const filteredOptions = options.filter(option => option.toLowerCase().includes(filter));

    // Mostrar solo si hay opciones que coinciden
    if (filteredOptions.length > 0) {
      suggestions.style.display = 'block';

      filteredOptions.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', () => {
          input.value = option; // Completar el input con la opción seleccionada
          document.location = `#${option}`
          suggestions.style.display = 'none'; // Ocultar el dropdown después de seleccionar
        });
        suggestions.appendChild(li);
      });
    } else {
      suggestions.style.display = 'none'; // Ocultar si no hay opciones coincidentes
    }
  } else {
    suggestions.style.display = 'none'; // Ocultar si no hay texto en el input
  }
}

// Ocultar el dropdown si se hace clic fuera del mismo
document.addEventListener('click', function(e) {
  const searchContainer = document.querySelector('.search-container');
  const suggestions = document.getElementById('suggestions');

  if (!searchContainer.contains(e.target)) {
    suggestions.style.display = 'none';
  }
});