var ctx = null;
var gameMap = [
	0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 2, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 0,
	0, 2, 3, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 0,
	0, 2, 3, 1, 4, 4, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 0,
	0, 2, 3, 1, 1, 4, 4, 1, 2, 3, 3, 2, 1, 1, 2, 1, 0, 0, 0, 0,
	0, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 2, 4, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 2, 4, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 1, 1, 1, 2, 2, 2, 2, 1, 0,
	0, 1, 1, 1, 1, 2, 3, 2, 1, 1, 4, 1, 1, 1, 1, 3, 3, 2, 1, 0,
	0, 1, 2, 2, 2, 2, 1, 2, 1, 1, 4, 1, 1, 1, 1, 1, 3, 2, 1, 0,
	0, 1, 2, 3, 3, 2, 1, 2, 1, 1, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4,
	0, 1, 2, 3, 3, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0,
	0, 1, 2, 3, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 0,
	0, 3, 2, 3, 4, 4, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 2, 1, 0,
	0, 3, 2, 3, 4, 4, 3, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 3, 0,
	0, 3, 2, 3, 4, 1, 3, 2, 1, 3, 1, 1, 1, 2, 1, 1, 1, 2, 3, 0,
	0, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 1, 1, 2, 2, 2, 2, 2, 3, 0,
	0, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 4, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

var itemMap = [ 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 5, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0,
	0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0,
	0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 
];
var gamestart = false;
var tileW = 40, tileH = 40;
var mapW = 20, mapH = 20;
var currentSecond = 0, frameCount = 0, framesLastSecond = 0, lastFrameTime = 0;
var pom=0,pombullet =0,pomenemy =0;
var keysCount = 0;
var points = 0;
var health = 3;
var tileset = null, tilesetURL = "tileset.png", tilesetLoaded = false;
var trump = null, trumpURL = "minitrump_run.png", trumpLoaded = false;
var coins = null, coinsURL = "coin.png", coinsLoaded = false;
var chest = null, chestURL = "chest.png", chestLoaded = false;
var key = null, keyURL = "key.png", keyLoaded = false;
var door = null, doorURL = "door.png", doorLoaded = false;
var bulletimage = null, bulletURL = "bullet.png", bulletLoaded = false;
var enemyimage = null, enemyURL = "enemies.png", enemyLoaded = false;
var aidskitimage = null, aidskitURL = "AIDSkit.png", aidsLoaded = false;
var portalimage = null, portalURL = "portal.png", portalLoaded = false;
var background = null, backgroundURL = "background.jpg", backgroundLoaded = false;

var itemindeks = 0;
var floorTypes = {
	solid	: 0,
	path	: 1,
	water	: 2
};
var tileTypes = {
	0 : { colour:"#685b48", floor:floorTypes.solid, sprite:[{x:0,y:0,w:40,h:40}]	},
	1 : { colour:"#5aa457", floor:floorTypes.path,	sprite:[{x:40,y:0,w:40,h:40}]	},
	2 : { colour:"#e8bd7a", floor:floorTypes.path,	sprite:[{x:80,y:0,w:40,h:40}]	},
	3 : { colour:"#286625", floor:floorTypes.solid,	sprite:[{x:120,y:0,w:40,h:40}]	},
	4 : { colour:"#678fd9", floor:floorTypes.water,	sprite:[{x:160,y:0,w:40,h:40}]	}
};

var directions = {
    down	: 0,
	right	: 1,
	up		: 2,
	left	: 3
};

var keysDown = {
	
    32 : false,
    37 : false,
	38 : false,
	39 : false,
	40 : false
    
};

var collectingTypes = {
    blank   : 0,
	coin	: 1,
	chest	: 2,
	aidskit : 3,
    key     : 4,
    door    : 5
};

var itemTileTypes = {
	0 : { colour:"#685b48", frames:1, floor:collectingTypes.blank, sprite:[{x:0,y:0,w:0,h:0}]	},
	1 : { colour:"#5aa457", frames:6, floor:collectingTypes.coin,	sprite:[{x:0,y:0,w:40,h:40},{x:40,y:0,w:40,h:40},{x:80,y:0,w:40,h:40},{x:120,y:0,w:40,h:40},{x:160,y:0,w:40,h:40},{x:200,y:0,w:40,h:40}]	},
	2 : { colour:"#e8bd7a", frames:1, floor:collectingTypes.chest, sprite:[{x:0,y:0,w:40,h:40}]},
	3 : { colour:"#286625", frames:1, floor:collectingTypes.aidskit,	sprite:[{x:0,y:0,w:40,h:40}]},
    4 : { colour:"#286625", frames:1, floor:collectingTypes.key,	sprite:[{x:0,y:0,w:40,h:40}]},
    5 : { colour:"#286625", frames:1, floor:collectingTypes.door,	sprite:[{x:0,y:0,w:40,h:40}]}
};



var viewport = {
	screen		: [0,0],
	startTile	: [0,0],
	endTile		: [0,0],
	offset		: [0,0],
	update		: function(px, py) {
		this.offset[0] = Math.floor((this.screen[0]/2) - px);
		this.offset[1] = Math.floor((this.screen[1]/2) - py);

		var tile = [ Math.floor(px/tileW), Math.floor(py/tileH) ];
        var item = [ Math.floor(px/tileW), Math.floor(py/tileH) ];
		this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0]/2) / tileW);
		this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1]/2) / tileH);

		if(this.startTile[0] < 0) { this.startTile[0] = 0; }
		if(this.startTile[1] < 0) { this.startTile[1] = 0; }

		this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0]/2) / tileW);
		this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1]/2) / tileH);

		if(this.endTile[0] >= mapW) { this.endTile[0] = mapW-1; }
		if(this.endTile[1] >= mapH) { this.endTile[1] = mapH-1; }
	}
};

var player = new Character();

function Character()
{
	this.tileFrom	= [1,1];
	this.tileTo		= [1,1];
	this.timeMoved	= 0;
	this.dimensions	= [40,40];
	this.position	= [40,40];
	this.delayMove	= 200;
    this.indeks     = 0;
    
	this.direction	= directions.down;
	this.sprites = {};
}
Character.prototype.placeAt = function(x, y)
{
	this.tileFrom	= [x,y];
	this.tileTo		= [x,y];
	this.position	= [((tileW*x)+((tileW-this.dimensions[0])/2)),
		((tileH*y)+((tileH-this.dimensions[1])/2))];
    
    if(itemMap[toIndex(x,y)]==collectingTypes.coin)
    {
        itemMap[toIndex(x,y)]= collectingTypes.blank;
        points++;
    }
    
    if(itemMap[toIndex(x,y)]==collectingTypes.key)
    {
        itemMap[toIndex(x,y)]= collectingTypes.blank;
        keysCount++;
    }
    
    if(itemMap[toIndex(x,y)]==collectingTypes.door && keysCount > 0)
    {
        itemMap[toIndex(x,y)]= collectingTypes.blank;
        keysCount--;
    }
    
    if(itemTileTypes[itemMap[toIndex(x,y)]].floor==collectingTypes.aidskit)
    {
        itemMap[toIndex(x,y)]= collectingTypes.blank;
        health=Math.min(3,health+1);
    }
};
Character.prototype.processMovement = function(t)
{
	if(this.tileFrom[0]==this.tileTo[0] && this.tileFrom[1]==this.tileTo[1]) { return false; }

	if((t-this.timeMoved)>=this.delayMove)
	{
		this.placeAt(this.tileTo[0], this.tileTo[1]);
	}
	else
	{
        this.indeks++;
        this.indeks %= 6;
        
		this.position[0] = (this.tileFrom[0] * tileW) + ((tileW-this.dimensions[0])/2);
		this.position[1] = (this.tileFrom[1] * tileH) + ((tileH-this.dimensions[1])/2);

		if(this.tileTo[0] != this.tileFrom[0])
		{
			var diff = (tileW / this.delayMove) * (t-this.timeMoved);
			this.position[0]+= (this.tileTo[0]<this.tileFrom[0] ? 0 - diff : diff);
		}
		if(this.tileTo[1] != this.tileFrom[1])
		{
			var diff = (tileH / this.delayMove) * (t-this.timeMoved);
			this.position[1]+= (this.tileTo[1]<this.tileFrom[1] ? 0 - diff : diff);
		}

		this.position[0] = Math.round(this.position[0]);
		this.position[1] = Math.round(this.position[1]);
        bullet.canmove=true;
	}

	return true;
}
Character.prototype.canMoveTo = function(x, y)
{
	if(x < 0 || x >= mapW || y < 0 || y >= mapH) { return false; }
	if(tileTypes[gameMap[toIndex(x,y)]].floor!=floorTypes.path) { return false; }
    if(itemTileTypes[itemMap[toIndex(x,y)]].floor==collectingTypes.door && keysCount <= 0) { return false; }
    else if( itemTileTypes[itemMap[toIndex(x,y)]].floor==collectingTypes.door){
        itemMap[toIndex(x,y)] = collectingTypes.blank;
        keysCount--;
    }
    if(itemTileTypes[itemMap[toIndex(x,y)]].floor==collectingTypes.chest)
    {
        itemMap[toIndex(x,y)] = collectingTypes.blank;
        
        if(y+1<mapH&&x+1<mapW)
            if(tileTypes[gameMap[toIndex(x+1,y+1)]].floor==floorTypes.path &&
              itemTileTypes[itemMap[toIndex(x+1,y+1)]].floor==collectingTypes.blank )
            {itemMap[toIndex(x+1,y+1)] = collectingTypes.coin;}
            
        
        if(y+1<mapH)
            if(tileTypes[gameMap[toIndex(x,y+1)]].floor===floorTypes.path &&
               itemTileTypes[itemMap[toIndex(x,y+1)]].floor===collectingTypes.blank )
            {itemMap[toIndex(x,y+1)] = collectingTypes.coin;}
        
        if(x+1<mapW)
            if(tileTypes[gameMap[toIndex(x+1,y)]].floor===floorTypes.path &&
               itemTileTypes[itemMap[toIndex(x+1,y)]].floor===collectingTypes.blank )
            {itemMap[toIndex(x+1,y)] = collectingTypes.coin;}
        
        if(x+1<mapW&&y-1>0)
            if(tileTypes[gameMap[toIndex(x+1,y-1)]].floor===floorTypes.path &&
               itemTileTypes[itemMap[toIndex(x+1,y-1)]].floor===collectingTypes.blank )
            {itemMap[toIndex(x+1,y-1)] = collectingTypes.coin;}
        
        if(y-1>0)
            if(tileTypes[gameMap[toIndex(x,y-1)]].floor===floorTypes.path &&
               itemTileTypes[itemMap[toIndex(x,y-1)]].floor===collectingTypes.blank )
            {itemMap[toIndex(x,y-1)] = collectingTypes.coin;}
        
        if(y-1>0&&x-1>0)
            if(tileTypes[gameMap[toIndex(x-1,y-1)]].floor===floorTypes.path &&
               itemTileTypes[itemMap[toIndex(x-1,y-1)]].floor===collectingTypes.blank )
            {itemMap[toIndex(x-1,y-1)] = collectingTypes.coin;}
        
        if(x-1>0)
            if(tileTypes[gameMap[toIndex(x-1,y)]].floor===floorTypes.path &&
               itemTileTypes[itemMap[toIndex(x-1,y)]].floor===collectingTypes.blank )
            {itemMap[toIndex(x-1,y)] = collectingTypes.coin;}
        
        if(x-1>0&&y+1<mapH)
            if(tileTypes[gameMap[toIndex(x-1,y+1)]].floor===floorTypes.path &&
               itemTileTypes[itemMap[toIndex(x-1,y+1)]].floor===collectingTypes.blank )
            {itemMap[toIndex(x-1,y+1)] = collectingTypes.coin;}
        
        
    }
    

	return true;
};
Character.prototype.canMoveUp		= function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]-1); };
Character.prototype.canMoveDown 	= function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]+1); };
Character.prototype.canMoveLeft 	= function() { return this.canMoveTo(this.tileFrom[0]-1, this.tileFrom[1]); };
Character.prototype.canMoveRight 	= function() { return this.canMoveTo(this.tileFrom[0]+1, this.tileFrom[1]); };

Character.prototype.moveLeft	= function(t) { this.tileTo[0]-=1; this.timeMoved = t; this.direction = directions.left; };
Character.prototype.moveRight	= function(t) { this.tileTo[0]+=1; this.timeMoved = t; this.direction = directions.right;};
Character.prototype.moveUp		= function(t) { this.tileTo[1]-=1; this.timeMoved = t; this.direction = directions.up; };
Character.prototype.moveDown	= function(t) { this.tileTo[1]+=1; this.timeMoved = t; this.direction = directions.down;};

function Bullet()
{
    this.dimensions = [40,40];
    this.position = [0,0];
    this.direction = [0,0];
    this.sprite=[{x:0,y:0,w:40,h:40}];
    this.active = false;
    this.canmove = false;
}
Bullet.prototype.movement = function(x,y)
{
    
    if(this.active==false){return false;}
    
    
    if(x <= 0 || x >= mapW || y <= 0 || y >= mapH) {this.active = false; return false; }
    if(tileTypes[gameMap[toIndex(x,y)]].floor===floorTypes.solid) {this.active = false; return false; }
    
    this.position[0]+=this.direction[0];
    this.position[1]+=this.direction[1];
}
var bullet = new Bullet();

function Enemy()
{
	this.dimensions	= [40,40];
	this.position	= [];
	this.direction	= directions.down;
	this.sprites = {};
    this.spriteindeks = [0,0];
    this.indeks = 0;
}
Enemy.prototype.movment = function(direct)
{
    if( direct == directions.right)
    {
       if(tileTypes[gameMap[toIndex(this.position[0]-1,this.position[1])]].floor==floorTypes.path)
       {
          this.position[0]-=1;  
       }
    }
    if( direct == directions.left)
    {
        if(tileTypes[gameMap[toIndex(this.position[0]+1,this.position[1])]].floor==floorTypes.path)
       {
          this.position[0]+=1;  
       }
    }
    if( direct == directions.down)
    {
        if(tileTypes[gameMap[toIndex(this.position[0],this.position[1]+1)]].floor==floorTypes.path)
       {
          this.position[1]+=1;  
       }
    }
    if( direct == directions.up)
    {
        if(tileTypes[gameMap[toIndex(this.position[0],this.position[1]-1)]].floor==floorTypes.path)
       {
          this.position[1]-=1;  
       }
    }
    this.direction=direct;
    
    
}
var enemyTab=[];
var enemyCount=0;
var enemyMax=7;
function toIndex(x, y)
{
	return((y * mapW) + x);
}

window.onload = function()
{
	ctx = document.getElementById('game').getContext("2d");
	
      
    
	ctx.font = "bold 16pt sans-serif";

	window.addEventListener("keydown", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40 || e.keyCode==32 ) { keysDown[e.keyCode] = true; }
	});
	window.addEventListener("keyup", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40 || e.keyCode==32) { keysDown[e.keyCode] = false; }
	});
     
	viewport.screen = [document.getElementById('game').width,
		document.getElementById('game').height];

	tileset = new Image();
	tileset.onerror = function()
	{
		ctx = null;
		alert("Failed loading tileset.");
	};
	tileset.onload = function() { tilesetLoaded = true; };
	tileset.src = tilesetURL;
    
    trump = new Image();
	trump.onerror = function()
	{
		ctx = null;
		alert("Failed loading Trump.");
	};
	trump.onload = function() { trumpLoaded = true; };
	trump.src = trumpURL;
    
    coins = new Image();
	coins.onerror = function(){ctx = null;alert("Failed loading coins.");};
	coins.onload = function() { coinsLoaded = true; };
	coins.src = coinsURL;
    
    chest = new Image();
	chest.onerror = function()
	{
		ctx = null;
		alert("Failed loading chest.");
	};
	chest.onload = function() { chestLoaded = true; };
	chest.src = chestURL;
    
    key = new Image();
	key.onerror = function()
	{
		ctx = null;
		alert("Failed loading key.");
	};
	key.onload = function() { keyLoaded = true; };
	key.src = keyURL;
    
    door = new Image();
	door.onerror = function()
	{
		ctx = null;
		alert("Failed loading door.");
	};
	door.onload = function() { doorLoaded = true; };
	door.src = doorURL;
    
    bulletimage = new Image();
	bulletimage.onerror = function()
	{
		ctx = null;
		alert("Failed loading dollarBullet.");
	};
	bulletimage.onload = function() { bulletLoaded = true; };
	bulletimage.src = bulletURL;
    
    enemyimage= new Image();
    enemyimage.onerror = function()
	{
		ctx = null;
		alert("Failed loading Enemy image.");
	};
	enemyimage.onload = function() { enemyLoaded = true; };
	enemyimage.src = enemyURL;
    
     aidskitimage= new Image();
     aidskitimage.onerror = function()
	{
		ctx = null;
		alert("Failed loading AIDS image.");
	};
	 aidskitimage.onload = function() { aidsLoaded = true; };
	 aidskitimage.src = aidskitURL;
	 
	 portalimage= new Image();
	 portalimage.onerror = function()
	{
		ctx = null;
		alert("Failed loading portal image.");
	};
	 portalimage.onload = function() { portalLoaded = true; };
	 portalimage.src = portalURL;
    
     background= new Image();
	 background.onerror = function()
	{
		ctx = null;
		alert("Failed loading background image.");
	};
	 background.onload = function() { backgroundLoaded = true; };
	background.src = backgroundURL;
    
    requestAnimationFrame(menu);
};

function drawGame()
{
    
	if(ctx==null) { return; }
	if(!gamestart) {return; }
	if(!tilesetLoaded) { requestAnimationFrame(drawGame); return; }
    
	var currentFrameTime = Date.now();
	var timeElapsed = currentFrameTime - lastFrameTime;

	var sec = Math.floor(Date.now()/1000);
	if(sec!=currentSecond)
	{
		currentSecond = sec;
		framesLastSecond = frameCount;
		frameCount = 1;
	}
	else { frameCount++; }

	if(!player.processMovement(currentFrameTime))
	{
		if(keysDown[38] && player.canMoveUp())			{ player.moveUp(currentFrameTime); }
		else if(keysDown[40] && player.canMoveDown())	{ player.moveDown(currentFrameTime); }
		else if(keysDown[37] && player.canMoveLeft())	{ player.moveLeft(currentFrameTime); }
		else if(keysDown[39] && player.canMoveRight())	{ player.moveRight(currentFrameTime); }
        else if(keysDown[32] && bullet.active == false)
            {
                bullet.active=true;
                bullet.position=player.tileFrom;
                if(player.direction == directions.up){bullet.direction = [0,-1];}
                if(player.direction == directions.down){bullet.direction = [0,1];}
                if(player.direction == directions.left){bullet.direction = [-1,0];}
                if(player.direction == directions.right){bullet.direction = [1,0];}
                
            }
	}
    
    //ENEMIES RESP y/2 x/4
    
    if(enemyMax>=enemyCount)
    {
        for(var i=0;i<enemyMax;i++)
        {
          if(enemyTab[i]===undefined)
          {
              enemyTab[i] = new Enemy();
              enemyTab[i].spriteindeks = [Math.round(Math.random()*3),Math.round(Math.random())];
              do{
                 var x = Math.round(Math.random()*mapW);
                 var y = Math.round(Math.random()*mapH);
                 if(x > 0 && x < mapW && y > 0 && y < mapH)
                 {
                     if(tileTypes[gameMap[toIndex(x,y)]].floor===floorTypes.path&& 
                        itemTileTypes[itemMap[toIndex(x,y)]].floor!=collectingTypes.door&& 
                       player.position[0]!=x&&player.position[1]!=y)
                     {
                         enemyTab[i].position=[x,y];
                        break;     
                     }
                 } 
              }
              while(1===1);
              
              break;
          }      
    }   enemyCount++;  
    }

    
	viewport.update(player.position[0] + (player.dimensions[0]/2),
		player.position[1] + (player.dimensions[1]/2));

	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);

	for(var y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y)
	{
		for(var x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x)
		{
			var tile = tileTypes[gameMap[toIndex(x,y)]];
             
			ctx.drawImage(tileset,
				tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].w, tile.sprite[0].h,
				viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH),
				tileW, tileH);
                
            var item = itemTileTypes[itemMap[toIndex(x,y)]];
            var countframe=itemindeks%item.frames;
            
            if(itemMap[toIndex(x,y)]==collectingTypes.coin)
            {
                ctx.drawImage(coins,
                item.sprite[countframe].x, item.sprite[countframe].y, item.sprite[countframe].w, item.sprite[countframe].h,
                viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH),
                tileW, tileH);
            }
            
            if(itemMap[toIndex(x,y)]==collectingTypes.chest)
            {
                ctx.drawImage(chest,
                item.sprite[countframe].x, item.sprite[countframe].y, item.sprite[countframe].w, item.sprite[countframe].h,
                viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH),
                tileW, tileH);
            }
            
            if(itemMap[toIndex(x,y)]==collectingTypes.key)
            {
                ctx.drawImage(key,
                item.sprite[countframe].x, item.sprite[countframe].y, item.sprite[countframe].w, item.sprite[countframe].h,
                viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH),
                tileW, tileH);
            }
            
            if(itemMap[toIndex(x,y)]==collectingTypes.door)
            {
                ctx.drawImage(door,
                item.sprite[countframe].x, item.sprite[countframe].y, item.sprite[countframe].w, item.sprite[countframe].h,
                viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH),
                tileW, tileH);
            }
             if(itemMap[toIndex(x,y)]==collectingTypes.aidskit)
            {
                ctx.drawImage(aidskitimage,
                item.sprite[countframe].x, item.sprite[countframe].y, item.sprite[countframe].w, item.sprite[countframe].h,
                viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH),
                tileW, tileH);
            }
			if(x==18&&y==1)
			{
				ctx.drawImage(portalimage,
                0, 0, 40, 40,
                viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH),
                tileW, tileH);
			}
			
            if(enemyCount>0)
            {
                for(var i=0;i<enemyMax;i++)
                {
                    if(enemyTab[i]!==undefined)
                    {
                        if(enemyTab[i].position[0]==x&&enemyTab[i].position[1]==y)
                        {
                            if(enemyTab[i].position[0]==bullet.position[0]&&enemyTab[i].position[1]==bullet.position[1])
                            {
                                bullet.active=false;
                                delete enemyTab[i];
                                enemyCount--;
                                if(itemTileTypes[itemMap[toIndex(x,y)]].floor==collectingTypes.blank)
                                    {
                                        var Lime = Math.round(Math.random()*10);
                                        if(Lime < 6)
                                        {
                                           itemMap[toIndex(x,y)]=collectingTypes.coin;   
                                        }
                                        else if(Lime < 9)
                                        {
                                            itemMap[toIndex(x,y)]=collectingTypes.aidskit;
                                        }
                                        else
                                          itemMap[toIndex(x,y)]=collectingTypes.chest;
                                        console.log(Lime);
                                    }
                                    
                            }
                            else if(enemyTab[i].position[0]==player.tileFrom[0]&&enemyTab[i].position[1]==player.tileFrom[1])
                            {
                                bullet.active=false;
                                delete enemyTab[i];
                                enemyCount--;
                                health--;
                            }
                            else
                            {
                                
                                ctx.drawImage(enemyimage,
                                enemyTab[i].spriteindeks[0]*120+(enemyTab[i].indeks*40), enemyTab[i].spriteindeks[1]*160+(enemyTab[i].direction*40), enemyTab[i].dimensions[0], enemyTab[i].dimensions[1],
                                viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH),
                                tileW, tileH);
                            }
                        }
                    }
                }
            }
            
            if(bullet.active==true && bullet.position[0]==x && bullet.position[1]==y)
            {
                ctx.drawImage(bulletimage,
                bullet.sprite[0].x, bullet.sprite[0].y, bullet.sprite[0].w, bullet.sprite[0].h,
                viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH),
                tileW, tileH); 
                
            }
		}
	}
    
    
	var sprite =[{x:player.indeks*40,y:player.direction*40,w:40,h:40}];
	ctx.drawImage(trump,
		sprite[0].x, sprite[0].y, sprite[0].w, sprite[0].h,
		viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
		player.dimensions[0], player.dimensions[1]);

    pom++;
    pombullet++;
    pomenemy++;
    if(pom>20)
    {itemindeks++;itemindeks%6;pom=0;}
    if(pombullet>4)
    {
        bullet.movement(bullet.position[0],bullet.position[1]);
        pombullet=0;
    }
    if(pomenemy>20)
    {
        for(var i=0;i<enemyMax;i++)
        {
            if(enemyTab[i]!==undefined)
            {
                var direct = Math.round((Math.random()*50)%4);
                enemyTab[i].movment(direct);
                enemyTab[i].indeks++;
                 enemyTab[i].indeks%=2;
            }
        }pomenemy=0;
    }
	ctx.fillStyle = "#871F78";
	ctx.fillText("FPS: " + framesLastSecond + "  Points: "+points + " Health: "+health, 10, 20);

	lastFrameTime = currentFrameTime;
    if(health>0)
    {
       requestAnimationFrame(drawGame); 
    }
	else{
    ctx.fillStyle = "#ff0000";
    ctx.font = "bold 24pt sans-serif";
        gamestart=false; 
	ctx.fillText("YOU LOSE", 130, 200);
    ctx.fillText("click F5 to restart", 90, 240);     
        
    }
	if(player.tileTo[0]==18&&player.tileTo[1]==1)
	{
		ctx.fillStyle = "#ff0000";
		ctx.font = "bold 24pt sans-serif";
        
		ctx.fillText("YOU WIN", 130, 200);
        ctx.fillText("click F5 to restart", 90, 240); 
        gamestart=false;
		 
	}
}

function menu()
{
    if(!gamestart)
    {
    if(ctx==null) { return; }
    var currentFrameTime = Date.now();
	var timeElapsed = currentFrameTime - lastFrameTime;

	var sec = Math.floor(Date.now()/1000);
	if(sec!=currentSecond)
	{
		currentSecond = sec;
		framesLastSecond = frameCount;
		frameCount = 1;
	}
	else { frameCount++; }
    
    ctx.fillStyle = "#ff0000";
    ctx.font = "bold 24pt sans-serif";
    ctx.drawImage(background,
		0, 100, 800, 568,
		0, 0,
		400, 400);   
	ctx.fillText("PRESS SPACE TO START", 5, 40);
    ctx.drawImage(trump,
		0, 0, 40, 40,
		10, 50,
		40, 40);
    ctx.fillText("- our hero", 50, 80);
        
        ctx.drawImage(enemyimage,
		0, 0, 40, 40,
		15, 90,
		30, 30);
     ctx.fillText("- enemies", 50, 115);   
        
        ctx.drawImage(aidskitimage,
		0, 0, 40, 40,
		15, 125,
		30, 30);
     ctx.fillText("- aidkit", 50, 150); 
        
        ctx.drawImage(key,
		0, 0, 40, 40,
		15, 160,
		30, 30);
     ctx.fillText("- key", 50, 185); 
        
        ctx.drawImage(door,
		0, 0, 40, 40,
		15, 195,
		30, 30);
        ctx.fillText("- door", 50, 220);
        
        ctx.drawImage(coins,
		0, 0, 40, 40,
		15, 230,
		30, 30);
        ctx.fillText("- coins", 50, 255);
        
        ctx.drawImage(chest,
		0, 0, 40, 40,
		15, 265,
		30, 30);
        ctx.fillText("- chest", 50, 290);
        
        ctx.drawImage(portalimage,
		0, 0, 40, 40,
		15, 300,
		30, 30);
        ctx.fillText("- portal", 50, 325);
        ctx.font = "bold 16pt sans-serif";
        ctx.fillText("U can atak enemies with space", 5, 350);
        ctx.fillText("Collect coins", 5, 370);
        ctx.fillText("Dont die good luck", 5, 390);
        if(keysDown[32]==true)
        {
            console.log(keysDown[32]);
             gamestart=true;   
        }
        console.log(keysDown[32]);
        requestAnimationFrame(menu); 
       
    }
    else
    {
        requestAnimationFrame(drawGame); 
        ctx.font = "bold 16pt sans-serif";
    }
}