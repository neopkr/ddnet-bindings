/**
 * Command Dict used on DDRaceNetwork
 * Game Version: 18.4
 * @neopkr
 */

const MAX_CLIENT_SETTING_BUFFER = 100000; // changed it
const GAME_VERSION = 18.4

let DDBIN_TAGS = [
    "client",
    "antiping",
    "nameplates",
    "hud",
    "player",
    "dummy",
    "chat",
    "gameplay",
    "sound",
    "mouse",
    "warning_message",
    "votes",
    "spec",
    "skin",
    "ui",
    "download",
    "map",
    "language",
    "community",
    "zoom",
    "video",
    "settings",
    "editor",
    "demo",
    "screenshot",
    "csv",
    "broadcast",
    "friends",
    "asset",
    "timeout",
    "color",
    "team",
    "weapon",
    "entities",
    "feed",
    "debug",
    "ghost",
    "command",
    "background",
    "menu",
    "collision", // ref hook collision
    "console",
    "version",
    "recorder"
]

let EXPECT_COMMANDS = [
    "<hex>", // Hexadecimal or int <value>
    "<str>", // string
    "<int:n,n>", // integer n (min), n (max) 
    "<bool>", // boolean (1 true, 0 false)
]

/**
 * CL_COMMANDS
 * Client Commands
 * Use Command.Parser
 * @ignore this command dict was a pain to do... (tags added manually so...)
 */
let CL_COMMANDS = {
    "parent": "Client",
    "cl_predict": "Predict client movements | <bool> | ddbin-tag:client,antiping",
    "cl_predict_dummy": "Predict dummy movements | <bool> | ddbin-tag:client,antiping",
    "cl_antiping_limit": "Antiping limit (0 to disable) | <int:0,200> | ddbin-tag:client,antiping",
    "cl_antiping": "Enable antiping, i.e. more aggressive prediction | <bool> | ddbin-tag:client,antiping",
    "cl_antiping_players": "Predict other player's movement more aggressively (only enabled if cl_antiping is set to 1) | <bool> | ddbin-tag:client,antiping",
    "cl_antiping_grenade": "Predict grenades (only enabled if cl_antiping is set to 1) | <bool> | ddbin-tag:client,antiping",
    "cl_antiping_weapons": "Predict weapon projectiles (only enabled if cl_antiping is set to 1) | <bool> | ddbin-tag:client,antiping",
    "cl_antiping_smooth": "Make the prediction of other player's movement smoother | <bool> | ddbin-tag:client,antiping",
    "cl_antiping_gunfire": "Predict gunfire and show predicted weapon physics (with cl_antiping_grenade 1 and cl_antiping_weapons 1) | <bool> | ddbin-tag:client,antiping",
    "cl_prediction_margin": "Prediction margin in ms (adds latency, can reduce lag from ping jumps) | <int:1,300> | ddbin-tag:client,antiping",
    "cl_sub_tick_aiming": "Send aiming data at sub-tick accuracy | <bool> | ddbin-tag:client,antiping",
    "cl_nameplates": "Show name plates | <bool> | ddbin-tag:client,nameplates",
    "cl_afk_emote": "Show zzz emote next to afk players | <bool> | ddbin-tag:client,nameplates",
    "cl_nameplates_always": "Always show name plates disregarding of distance | <bool> | ddbin-tag:client,nameplates",
    "cl_nameplates_teamcolors": "Use team colors for name plates | <bool> | ddbin-tag:client,nameplates",
    "cl_nameplates_size": "Size of the name plates from 0 to 100% | <int:0,100> | ddbin-tag:client,nameplates",
    "cl_nameplates_clan": "Show clan in name plates | <bool> | ddbin-tag:client,nameplates",
    "cl_nameplates_clan_size": "Size of the clan plates from 0 to 100% | <int:0,100> | ddbin-tag:client,nameplates",
    "cl_nameplates_ids": "Show IDs in name plates | <bool> | ddbin-tag:client,nameplates",
    "cl_nameplates_own": "Show own name plate (useful for demo recording) | <bool> | ddbin-tag:client,nameplates",
    "cl_nameplates_friendmark": "Show friend mark (♥) in name plates | <bool> | ddbin-tag:client,nameplates",
    "cl_nameplates_strong": "Show strong/weak in name plates (0 - off, 1 - icons, 2 - icons + numbers) | <int:0,2> | ddbin-tag:client,nameplates",
    "cl_text_entities": "Render textual entity data | <bool> | ddbin-tag:client",
    "cl_text_entities_size": "Size of textual entity data from 1 to 100% | <int:1,100> | ddbin-tag:client",
    "cl_streamer_mode": "Censor sensitive information such as /save password | <bool> | ddbin-tag:client",
    "cl_authed_player_color": "Color of name of authenticated player in scoreboard | <hex> | ddbin-tag:client,hud",
    "cl_same_clan_color": "Clan color of players with the same clan as you in scoreboard | <hex> | ddbin-tag:client,hud",
    "cl_enable_ping_color": "Whether ping is colored in scoreboard | <bool> | ddbin-tag:client,hud",
    "cl_autoswitch_weapons": "Auto switch weapon on pickup | <bool> | ddbin-tag:client,player",
    "cl_autoswitch_weapons_out_of_ammo": "Auto switch weapon when out of ammo | <bool> | ddbin-tag:client,player",
    "cl_showhud": "Show ingame HUD | <bool> | ddbin-tag:client,hud",
    "cl_showhud_healthammo": "Show ingame HUD (Health + Ammo) | <bool> | ddbin-tag:client,hud",
    "cl_showhud_score": "Show ingame HUD (Score) | <bool> | ddbin-tag:client,hud",
    "cl_showhud_timer": "Show ingame HUD (Timer) | <bool> | ddbin-tag:client,hud",
    "cl_showhud_dummy_actions": "Show ingame HUD (Dummy Actions) | <bool> | ddbin-tag:client,hud,dummy",
    "cl_showhud_player_position": "Show ingame HUD (Player Position) | <bool> | ddbin-tag:client,hud,player",
    "cl_showhud_player_speed": "Show ingame HUD (Player Speed) | <bool> | ddbin-tag:client,hud,player",
    "cl_showhud_player_angle": "Show ingame HUD (Player Aim Angle) | <bool> | ddbin-tag:client,hud,player",
    "cl_showhud_ddrace": "Show ingame HUD (DDRace HUD) | <bool>, | ddbin-tag:client,hud",
    "cl_showhud_jumps_indicator": "Show ingame HUD (Jumps you have and have used) | <bool> | ddbin-tag:client,hud",
    "cl_show_freeze_bars": "Whether to show a freeze bar under frozen players to indicate the thaw time | <bool> | ddbin-tag:client,hud",
    "cl_freezebars_alpha_inside_freeze": "Opacity of freeze bars inside freeze (0 invisible, 100 fully visible) | <int:0,100> | ddbin-tag:client,hud",
    "cl_showrecord": "Show old style DDRace client records | <bool> | ddbin-tag:client,hud",
    "cl_shownotifications": "Make the client notify when someone highlights you | <bool> | ddbin-tag:client,hud,chat",
    "cl_showemotes": "Show tee emotes | <bool> | ddbin-tag:client,gameplay",
    "cl_showchat": "Show chat (2 to always show large chat area) | <int:0,2> | ddbin-tag:client,hud,chat",
    "cl_show_chat_friends": "Show only chat messages from friends | <bool> | ddbin-tag:client,hud,chat",
    "cl_show_chat_system": "Show chat messages from the server | <bool> | ddbin-tag:client,hud,chat",
    "cl_showkillmessages": "Show kill messages | <bool> | ddbin-tag:client,hud",
    "cl_show_finish_messages": "Show finish messages | <bool> | ddbin-tag:client,hud,chat",
    "cl_show_votes_after_voting": "Show votes window after voting | <bool> | ddbin-tag:client,hud,votes",
    "cl_show_local_time_always": "Always show local time | <bool> | ddbin-tag:client,hud,time",
    "cl_showfps": "Show ingame FPS counter | <bool> | ddbin-tag:client,hud",
    "cl_showpred": "Show ingame prediction time in milliseconds | <bool> | ddbin-tag:client",
    "cl_eye_wheel": "Show eye wheel along together with emotes | <bool> | ddbin-tag:client",
    "cl_eye_duration": "How long the eyes emotes last | <int:1,999999> | ddbin-tag:client",
    "cl_airjumpindicator": "Show the air jump indicator | <bool> | ddbin-tag:client,hud",
    "cl_threadsoundloading": "Load sound files threaded | <bool> | ddbin-tag:client,sound",
    "cl_warning_teambalance": "Warn about team balance | <bool> | ddbin-tag:client,chat,warning_message",
    "cl_mouse_deadzone": "Deadzone for the camera to follow the cursor | <int:0,3000> | ddbin-tag:client,mouse",
    "cl_mouse_followfactor": "Factor for the camera to follow the cursor | <int:0,200> | ddbin-tag:client,mouse",
    "cl_mouse_max_distance": "Maximum cursor distance | <int:0,5000> | ddbin-tag:client,mouse",
    "cl_mouse_min_distance": "Minimum cursor distance | <int:0,5000> | ddbin-tag:client,mouse",
    "cl_dyncam": "Enable dyncam | <bool> | ddbin-tag:client,mouse",
    "cl_dyncam_max_distance": "Maximum dynamic camera cursor distance | <int:0,2000> | ddbin-tag:client,mouse",
    "cl_dyncam_min_distance": "Minimum dynamic camera cursor distance | <int:0,2000> | ddbin-tag:client,mouse",
    "cl_dyncam_mousesens": "Mouse sens used when dyncam is toggled on | <int:0,100000> | ddbin-tag:client,mouse",
    "cl_dyncam_deadzone": "Deadzone for the dynamic camera to follow the cursor | <int:1,1300> | ddbin-tag:client,mouse",
    "cl_dyncam_follow_factor": "Factor for the dynamic camera to follow the cursor | <int:0,200> | ddbin-tag:client,mouse",
    "cl_dyncam_smoothness": "Transition amount of the camera movement, 0=instant, 100=slow and smooth | <int:0,100> | ddbin-tag:client,mouse",
    "cl_dyncam_stabilizing": "Amount of camera slowdown during fast cursor movement. High value can cause delay in camera movement | <int:0,100> | ddbin-tag:client,mouse",
    "cl_multiview_sensitivity": "Set how fast the camera will move to the desired location (higher = faster) | <int:0,200> | ddbin-tag:client,spec",
    "cl_multiview_zoom_smoothness": "Set the smoothness of the multi-view zoom (in ms, higher = slower) | <int:50,5000> | ddbin-tag:client,spec",
    "cl_skin_prefix": "Replace the skins by skins with this prefix (e.g. kitty, santa) | <str> | ddbin-tag:player,client,skin",
    "cl_fat_skins": "Enable fat skins | <bool> | ddbin-tag:player,client,skin",
    // Commands below generated by parser. (must have errors on the description or types) | If has errors on the description or types will be mark with *
    "cl_show_welcome": "Show welcome message indicating the first launch of the client | <bool> | ddbin-tag:client",
    "cl_motd_time": "How long to show the server message of the day (in seconds) | <int:0,100> | ddbin-tag:client",
    "cl_map_download_url": "URL used to download maps (can start with http:// or https://) | <str> | ddbin-tag:client,map,download",
    "cl_map_download_connect_timeout_ms": "HTTP map downloads: timeout for the connect phase in milliseconds (0 to disable) | <int:0,100000> | ddbin-tag:client,map,download",
    "cl_map_download_low_speed_limit": "HTTP map downloads: Set low speed limit in bytes per second (0 to disable) | <int:0,100000> | ddbin-tag:client,map,download",
    "cl_map_download_low_speed_time": "HTTP map downloads: Set low speed limit time period in milliseconds (0 to disable) | <int:0,100000> | ddbin-tag:client,map,download",
    "cl_languagefile": "What language file to use | <str> | ddbin-tag:client,language",
    "cl_skin_download_url": "URL used to download skins | <str> | ddbin-tag:client,skin,download",
    "cl_skin_community_download_url": "URL used to download community skins | <str> | ddbin-tag:client,skin,community,download",
    "cl_vanilla_skins_only": "Only show skins available in Vanilla Teeworlds | <bool> | ddbin-tag:client,skin",
    "cl_download_skins": "Download skins from cl_skin_download_url on-the-fly | <bool> | ddbin-tag:client,skin",
    "cl_download_community_skins": "Allow to download skins created by the community. Uses cl_skin_community_download_url instead of cl_skin_download_url for the download | <bool> | ddbin-tag:client,skin,download,community",
    "cl_auto_statboard_screenshot": "Automatically take game over statboard screenshot | <bool> | ddbin-tag:client",
    "cl_auto_statboard_screenshot_max": "Maximum number of automatically created statboard screenshots (0 = no limit) | <int:0,1000> | ddbin-tag:client",
    "cl_default_zoom": "Default zoom level | <int:0,20> | ddbin-tag:client,zoom",
    "cl_smooth_zoom_time": "Time of smooth zoom animation in milliseconds (0 for off) | <int:0,5000> | ddbin-tag:client,zoom",
    "cl_limit_max_zoom_level": "Specifies if zooming in-game should be limited or not (0 = no limit) | <bool> | ddbin-tag:client,zoom",
    "cl_dummy": "Whether you control your player (0) or your dummy (1) | <bool> | ddbin-tag:client,dummy",
    "cl_dummy_hammer": "Whether dummy is hammering for a hammerfly | <bool> | ddbin-tag:client,dummy",
    "cl_dummy_resetonswitch": "Whether dummy or player should stop pressing keys when you switch (0 = off, 1 = dummy, 2 = player) | <int:0,2> | ddbin-tag:client,dummy",
    "cl_dummy_restore_weapon": "Whether dummy should switch to the last weapon after hammerfly | <bool> | ddbin-tag:client,dummy",
    "cl_dummy_copy_moves": "Whether dummy should copy your moves | <bool> | ddbin-tag:client,dummy",
    "cl_dummy_control": "Whether you can control the dummy at the same time (cl_dummy_jump, cl_dummy_fire, cl_dummy_hook) | <bool> | ddbin-tag:client,dummy",
    "cl_dummy_jump": "Whether dummy is jumping (requires cl_dummy_control 1) | <bool> | ddbin-tag:client,dummy",
    "cl_dummy_fire": "Whether dummy is firing (requires cl_dummy_control 1) | <bool> | ddbin-tag:client,dummy",
    "cl_dummy_hook": "Whether dummy is hooking (requires cl_dummy_control 1) | <bool> | ddbin-tag:client,dummy",
    "cl_show_start_menu_images": "Show start menu images | <bool> | ddbin-tag:client",
    "cl_skip_start_menu": "Skip the start menu | <bool> | ddbin-tag:client",
    "cl_video_pausewithdemo": "Pause video rendering when demo playing pauses | <bool> | ddbin-tag:client,video",
    "cl_video_showhud": "Show in-game HUD when rendering video | <bool> | ddbin-tag:client,video",
    "cl_video_showchat": "Show chat when rendering video | <bool> | ddbin-tag:client,video",
    "cl_video_sound_enable": "Use sound when rendering video | <bool> | ddbin-tag:client,video",
    "cl_video_show_hook_coll_other": "Show other players' hook collision lines when rendering video | <bool> | ddbin-tag:client,video",
    "cl_video_show_direction": "Show players' key presses when rendering video (1 = other players', 2 = also your own, 3 = only your own) | <int:0,3> | ddbin-tag:client,video",
    "cl_video_crf": "Set CRF (Constant Rate Factor) when encoding video with libx264 (0 for highest quality, 51 for lowest) | <int:0,51> | ddbin-tag:client,video",
    "cl_video_preset": "Set preset when encoding video with libx264, default is 5 (medium), 0 is ultrafast, 9 is placebo (the slowest, not recommended) | <int:0,9> | ddbin-tag:client,video",
    "cl_save_settings": "Write the settings file on exit | <bool> | ddbin-tag:client,settings",
    "cl_refresh_rate": "Refresh rate for updating the game (in Hz) | <int:0,10000> | ddbin-tag:client,settings",
    "cl_refresh_rate_inactive": "Refresh rate for updating the game when the window is inactive (in Hz) | <int:0,10000> | ddbin-tag:client,settings",
    "cl_editor": "Open the map editor | <bool> | ddbin-tag:client,editor",
    "cl_editor_dilate": "Automatically dilate embedded images | <bool> | ddbin-tag:client,editor",
    "cl_skin_filter_string": "Skin filtering | <str> | ddbin-tag:client,skin",
    "cl_editor_max_history": "Maximum number of undo actions in the editor history (not shared between editor, envelope editor, and server settings editor) | <int:1,500> | ddbin-tag:client,editor",
    "cl_auto_demo_record": "Automatically record demos | <bool> | ddbin-tag:client,demo",
    "cl_auto_demo_on_connect": "Only start a new demo when connecting while automatically recording demos | <bool> | ddbin-tag:client,demo",
    "cl_auto_demo_max": "Maximum number of automatically recorded demos (0 = no limit) | <int:0,1000> | ddbin-tag:client,demo",
    "cl_auto_screenshot": "Automatically take game over screenshots | <bool> | ddbin-tag:client,screenshot",
    "cl_auto_screenshot_max": "Maximum number of automatically created screenshots (0 = no limit) | <int:0,1000> | ddbin-tag:client,screenshot",
    "cl_auto_csv": "Automatically create game over CSV files | <bool> | ddbin-tag:client,csv",
    "cl_auto_csv_max": "Maximum number of automatically created CSV files (0 = no limit) | <int:0,1000> | ddbin-tag:client,csv",
    "cl_show_broadcasts": "Show broadcasts in-game | <bool> | ddbin-tag:client,broadcast,chat",
    "cl_print_broadcasts": "Print broadcasts to console | <bool> | ddbin-tag:client,broadcast,chat",
    "cl_print_motd": "Print MOTD to console | <bool> | ddbin-tag:client,broadcast,chat",
    "cl_friends_ignore_clan": "Ignore clan tag when searching for friends | <bool> | ddbin-tag:client,friends",
    "cl_assets_entities": "The asset for entities | <str> | ddbin-tag:client,asset",
    "cl_asset_game": "The asset for the game | <str> | ddbin-tag:client,asset",
    "cl_asset_emoticons": "The asset for emoticons | <str> | ddbin-tag:client,asset",
    "cl_asset_particles": "The asset for particles | <str> | ddbin-tag:client,asset",
    "cl_asset_hud": "The asset for HUD | <str> | ddbin-tag:client,asset",
    "cl_asset_extras": "The asset for the game graphics that do not come from the main assets | <str> | ddbin-tag:client,asset",
    "cl_port": "Port to use for client connections to the server (0 to choose a random port, 1024 or higher to set a manual port, requires a restart) | <int:0,65535> | ddbin-tag:client",
    "cl_dummy_port": "Port to use for dummy connections to the server (0 to choose a random port, 1024 or higher to set a manual port, requires a restart) | <int:0,65535> | ddbin-tag:client",
    "cl_contact_port": "Port to use for serverinfo connections to the server (0 to choose a random port, 1024 or higher to set a manual port, requires a restart) | <int:0,65535> | ddbin-tag:client",
    "cl_race_binds_set": "What level the DDRace binds are set to (automated, no need to use this) | <bool> | ddbin-tag:client",
    "cl_reconnect_timeout": "How many seconds to wait before retrying a connection after failure | <int:0,10000> | ddbin-tag:client,timeout", // Below need fix
    "cl_reconnect_full": "How many seconds to wait before reconnecting (when server is full, 0 for off) | <int:0,600> | ddbin-tag:client,timeout",
    "cl_message_system_color": "System message color | <hex> | ddbin-tag:client,color,chat",
    "cl_message_client_color": "Client message color | <hex> | ddbin-tag:client,color,chat",
    "cl_message_highlight_color": "Highlighted message color | <hex> | ddbin-tag:client,color,chat",
    "cl_message_team_color": "Team message color | <hex> | ddbin-tag:client,color,team,chat",
    "cl_message_color": "Message color | <hex> | ddbin-tag:client,chat,color",
    "cl_laser_rifle_inner_color": "Laser inner color for Rifle | <hex> | ddbin-tag:client,color,weapon",
    "cl_laser_rifle_outline_color": "Laser outline color for Rifle | <hex> | ddbin-tag:client,color,weapon",
    "cl_laser_sg_inner_color": "Laser inner color for Shotgun | <hex> | ddbin-tag:client,color,weapon",
    "cl_laser_sg_outline_color": "Laser outline color for Shotgun | <hex> | ddbin-tag:client,color,weapon",
    "cl_laser_door_inner_color": "Laser inner color for doors | <hex> | ddbin-tag:client,color,entities",
    "cl_laser_door_outline_color": "Laser outline color for doors | <hex> | ddbin-tag:client,color,entities",
    "cl_laser_freeze_inner_color": "Laser inner color for freezes | <hex> | ddbin-tag:client,color,entities",
    "cl_laser_freeze_outline_color": "Laser outline color for freezes | <hex> | ddbin-tag:client,color,entities",
    "cl_kill_message_normal_color": "Kill message normal color | <hex> | ddbin-tag:client,color,feed",
    "cl_kill_message_highlight_color": "Kill message highlight color | <hex> | ddbin-tag:client,color,feed",
    "cl_message_friend": "Enable coloring and the heart for friends | <bool> | ddbin-tag:client,color,chat",
    "cl_message_friend_color": "Friend message color | <hex> | ddbin-tag:client,color,chat",
    "conn_timeout": "Network timeout | <int:5,1000> | ddbin-tag:client,timeout",
    "cl_show_ids": "Whether to show client ids in scoreboard | <bool> | ddbin-tag:client,hud,debug",
    "cl_scoreboard_on_death": "Whether to show scoreboard after death or not | <bool> | ddbin-tag:client,hud", // at this point adding tags, should be create a tag scoreboard?
    "cl_auto_race_record": "Save the best demo of each race | <bool> | ddbin-tag:client,demo",
    "cl_replays": "Enable/disable replays | <bool> | ddbin-tag:client,demo",
    "cl_replay_length": "Set the default length of the replays | <int:10,0> | ddbin-tag:client,demo",
    "cl_race_record_server_control": "Let the server start the race recorder | <bool> | ddbin-tag:client,demo",
    "cl_demo_name": "Save the player name within the demo | <bool> | ddbin-tag:client,demo",
    "cl_demo_assume_race": "Assume that demos are race demos | <bool> | ddbin-tag:client,demo",
    "cl_race_ghost": "Enable ghost | <bool> | ddbin-tag:client,demo,ghost",
    "cl_race_ghost_server_control": "Let the server start the ghost | <bool> | ddbin-tag:client,demo,ghost",
    "cl_race_show_ghost": "Show ghost | <bool> | ddbin-tag:client,demo,ghost",
    "cl_race_save_ghost": "Save ghost | <bool> | ddbin-tag:client,demo,ghost",
    "cl_race_ghost_strict_map": "Match ghosts by map version instead of only map name | <bool> | ddbin-tag:client,demo,ghost",
    "cl_race_ghost_save_best": "Save only ghosts that are better than the previous record. | <bool> | ddbin-tag:client,demo,ghost",
    "cl_race_ghost_alpha": "Visibility of ghosts (alpha value, 0 invisible, 100 fully visible) | <int:0,100> | ddbin-tag:client,demo,ghost",
    "cl_ddrace_scoreboard": "Enable DDRace Scoreboard | <bool> | ddbin-tag:client,hud",
    "cl_show_others": "Show players in other teams (2 to show own team only) | <int:0,2> | ddbin-tag:client,gameplay",
    "cl_show_others_alpha": "Show players in other teams (alpha value, 0 invisible, 100 fully visible) | <int:0,100> | ddbin-tag:client,gameplay",
    "cl_overlay_entities": "Overlay game tiles with a percentage of opacity | <int:0,100> | ddbin-tag:client,entities",
    "cl_showquads": "Show quads (only interesting for mappers, or if your system has extremely bad performance) | <bool> | ddbin-tag:client,entities",
    "cl_background_color": "Background color | <hex> | ddbin-tag:client,color,entitites,background", // ?
    "cl_background_entities_color": "Background (entities) color | <hex> | ddbin-tag:client,color,entities,background", // ?
    "cl_background_entities": "Background (entities) | <str> | ddbin-tag:client,color,entities",
    "cl_run_on_join": "Command to run when joining a server | <str> | ddbin-tag:client,command",
    "cl_menu_map": "Background map in the menu | <str> | ddbin-tag:client,menu,map,background",
    "cl_rotation_radius": "Menu camera rotation radius | <int:1,500> | ddbin-tag:client,menu",
    "cl_rotation_speed": "Menu camera rotations in seconds | <int:1,120> | ddbin-tag:client,menu",
    "cl_camera_speed": "Menu camera speed | <int:1,40> | ddbin-tag:client,menu",
    "cl_background_show_tiles_layers": "Whether to draw tile layers when using custom background (entities) | <bool> | ddbin-tag:client,entities,blackground",
    "cl_unpredicted_shadow": "Show unpredicted shadow tee (0 = off, 1 = on, -1 = don't even show in debug mode) | <int:-1,1> | ddbin-tag:client,antiping", // this is from antiping or what? in any case i would add antiping tag.
    "cl_predict_freeze": "Predict freeze tiles (0 = off, 1 = on, 2 = partial (allow a small amount of movement in freeze) | <int:0,2> | ddbin-tag:client,antiping", // same
    "cl_show_ninja": "Show ninja skin | <bool> | ddbin-tag:client,gameplay",
    "cl_show_hook_coll_other": "Show other players' hook collision line (2 to always show) | <int:0,2> | ddbin-tag:client,collision",
    "cl_show_hook_coll_own": "Show own players' hook collision line (2 to always show) | <int:0,2> | ddbin-tag:client,collision",
    "cl_hook_coll_size": "Size of hook collision line | <int:0,20> | ddbin-tag:client,collision",
    "cl_hook_coll_alpha": "Alpha of hook collision line (0 invisible, 100 fully visible) | <int:0,100> | ddbin-tag:client,collision",
    "cl_hook_coll_color_no_coll": "Specifies the color of a hookline that hits nothing. | <hex> | ddbin-tag:client,collision,color",
    "cl_hook_coll_color_hookable_coll": "Specifies the color of a hookline that hits hookable tiles. | <hex> | ddbin-tag:client,collision,color",
    "cl_hook_coll_color_tee_coll": "Specifies the color of a hookline that hits tees. | <hex> | ddbin-tag:client,collision,color",
    "cl_chat_teamcolors": "Show names in chat in team colors | <bool> | ddbin-tag:client,chat,team",
    "cl_chat_reset": "Reset chat when pressing escape | <bool> | ddbin-tag:client,chat",
    "cl_chat_old": "Old chat style: No tee, no background | <bool> | ddbin-tag:client,chat,hud",
    "cl_chat_size": "Chat font size | <int:10,100> | ddbin-tag:client,chat",
    "cl_chat_width": "Chat width | <int:140,400> | ddbin-tag:client,chat",
    "cl_show_direction": "Show key presses (1 = other players', 2 = also your own, 3 = only your own) | <int:0,3> | ddbin-tag:client,gameplay",
    "cl_old_gun_position": "Tees hold gun a bit higher like in TW 0.6.1 and older | <bool> | ddbin-tag:client,gameplay",
    "cl_confirm_disconnect_time": "Confirmation popup before disconnecting after game time (in minutes, -1 to turn off, 0 to always turn on) | <int:-1,1440> | ddbin-tag:client",
    "cl_confirm_quit_time": "Confirmation popup before quitting after game time (in minutes, -1 to turn off, 0 to always turn on) | <int:-1,1440> | ddbin-tag:client",
    "cl_timeout_code": "Timeout code to use | <str> | ddbin-tag:client,timeout",
    "cl_dummy_timeout_code": "Dummy Timeout code to use | <str> | ddbin-tag:client,timeout",
    "cl_timeout_seed": "Timeout seed | <str> | ddbin-tag:client,timeout",
    "cl_input_fifo": "Fifo file (non-Windows) or Named Pipe (Windows) to use as input for client console | <str> | ddbin-tag:client,console",
    "cl_config_version": "The config version. Helps newer clients fix bugs with older configs. | <int:0,0> | ddbin-tag:client,version",
    "cl_demo_slice_begin": "Begin marker for demo slice | <int:-1,0> | ddbin-tag:client,demo",
    "cl_demo_slice_end": "End marker for demo slice | <int:-1,0> | ddbin-tag:client,demo",
    "cl_demo_show_speed": "Show speed meter on change | <bool> | ddbin-tag:client,demo",
    "cl_demo_show_pause": "Show pause/play indicator on change | <bool> | ddbin-tag:client,demo",
    "cl_demo_keyboard_shortcuts": "Enable keyboard shortcuts in demo player | <bool> | ddbin-tag:client,demo",
    "cl_video_recorder_fps": "At which FPS the videorecorder should record demos. | <int:1,1000> | ddbin-tag:client,video,demo,recorder"
};

/**
 * UI_COMMANDS
 * UserInterface Commands
 * Use Command.Parser // nombre provisorioxd
 */
let UI_COMMANDS = {
    "parent": "UI",
    "ui_color": "Interface Color | <hex> | ddbin-tag:ui",
    "ui_colorize_ping": "Highlight ping | <bool> | ddbin-tag:ui",
    "ui_colorize_gametype": "Highlight gametype | <bool> | ddbin-tag:ui",
    "ui_page": "Interface page | <int:6,13> | ddbin-tag:ui",
    "ui_settings_page": "Interface settings page | <int:0,9> | ddbin-tag:ui",
    "ui_toolbox_page": "Toolbox page | <int:0,2> | ddbin-tag:ui",
    "ui_server_address": "Interface server address | <str> | ddbin-tag:ui",
    "ui_mousesens": `Mouse sensitivity for menus/editor | <int:1,${MAX_CLIENT_SETTING_BUFFER}> | ddbin-tag:ui`,
    "ui_controller_sens": `Controller sensitivity for menus/editor | <int:1,${MAX_CLIENT_SETTING_BUFFER}> | ddbin-tag:ui`,
    "ui_smooth_scroll_time": "Time of smooth scrolling animation in menus/editor in ms (0 for off) | <int:0,5000> | ddbin-tag:ui",
    "ui_close_window_after_changing_setting": "Close window after changing setting | <bool> | ddbin-tag:ui",
    "ui_unread_news": "Whether there is unread news | <bool> | ddbin-tag:ui",
};

/**
 * PLAYER_COMMANDS
 * Player Commands
 * Use Command.Parser
 */
let PLAYER_COMMANDS = {
    "parent": "Player",
    "player_use_custom_color": "Toggles usage of custom colors | <bool> | ddbin-tag:player,skin",
    "player_color_body": "Player body color | <hex> | ddbin-tag:player,skin",
    "player_color_feet": "Player feet color | <hex> | ddbin-tag:player,skin",
    "player_skin": "Player skin | <str> | ddbin-tag:player,skin",
    "player_default_eyes": "Player eyes when joining server. 0 = normal, 1 = pain, 2 = happy, 3 = surprise, 4 = angry, 5 = blink | <int:0,5> | ddbin-tag:player,skin"
};

let DUMMY_COMMANDS = {
    "parent": "Dummy",
    "dummy_name": "Name of the dummy | <str> | ddbin-tag:client,dummy",
    "dummy_clan": "Clan of the dummy | <str> | ddbin-tag:client,dummy",
    "dummy_country": "Country of the Dummy | <int:-1,1000> | ddbin-tag:client,dummy",
    "dummy_use_custom_color": "Toggles usage of custom colors | <bool> | ddbin-tag:client,dummy",
    "dummy_color_body": "Dummy body color | <hex> | ddbin-tag:client,dummy",
    "dummy_color_feet": "Dummy feet color | <hex> | ddbin-tag:client,dummy",
    "dummy_skin": "Dummy skin | <str> | ddbin-tag:client,dummy",
    "dummy_default_eyes": "Dummy eyes when joining server (0 = normal, 1 = pain, 2 = happy, 3 = surprise, 4 = angry, 5 = blink) | <int:0,5> | ddbin-tag:client,dummy"
};
/**
 * GFX_COMMANDS
 */
let GFX_COMMANDS = {
    "parent": "GFX",
    "gfx_noclip": "Disable clipping | <bool>",
}

/**
 * 
 * @param {{}} dict 
 */
function parser(dict) {
    let array = [];
    const values = Object.entries(dict);
    values.forEach(e => {
        let template = {
            parent: dict["parent"],
            command: "",
            description: "",
            type: "",
            min: 0,
            max: 0,
            tags: [],
        };

        let command_name = e[0];
        let min;
        let max;
        let command_ = e[1].split("|");
        let command_desc = command_[0].trim();
        let command_type = command_[1]?.trim();
        if (command_type != undefined) {
            command_type = command_type.replace("<", "").replace(">", "");
            if (command_type == "bool") {
                min = 0;
                max = 1;
            } else if (command_type.includes("int")) {
                let tmp_cmd = command_type.split(":");
                min = tmp_cmd[1].split(",")[0];
                max = tmp_cmd[1].split(",")[1];
                command_type = tmp_cmd[0];
            }
        }

        let command_tags = command_[2];
        if (command_tags != undefined) {
            command_tags = command_tags.split(":")[1].split(",");
        }
        template.command = command_name;
        template.description = command_desc;
        template.type = command_type;
        template.min = min;
        template.max = max;
        template.tags = command_tags;
        
        if (command_name != "parent")
            array.push(template);
    });

    return array;
}

function GetAllCommands() {
    const client = parser(CL_COMMANDS);
    const player = parser(PLAYER_COMMANDS);
    const dummy = parser(DUMMY_COMMANDS);
    const ui = parser(UI_COMMANDS);
    const gfx = parser(GFX_COMMANDS);

    let array = [];

    for (let i = 0; i < client.length; i++) {
        array.push(client[i]["command"]);
    }

    for (let i = 0; i < player.length; i++) {
        array.push(player[i]["command"]);
    }

    for (let i = 0; i < dummy.length; i++) {
        array.push(dummy[i]["command"]);
    }

    for (let i = 0; i < ui.length; i++) {
        array.push(ui[i]["command"]);
    }

    for (let i = 0; i < gfx.length; i++) {
        array.push(gfx[i]["command"]);
    }

    return array;
}

//console.log(parser(GFX_COMMANDS));