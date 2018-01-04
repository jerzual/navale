export const CASE_SIZE = 50;
export const CASE_AMOUNT = 8;
export const MARGIN = 2;
export const BOARD_SIZE = CASE_SIZE * CASE_AMOUNT;

// actions

export const SHIP_DRAG = 'SHIP_DRAG';
export type SHIP_DRAG = typeof SHIP_DRAG;

export const HIT_REQUEST= 'HIT_REQUEST';
export type HIT_REQUEST = typeof HIT_REQUEST;

export const HIT_RESPONSE= 'HIT_RESPONSE';
export type HIT_RESPONSE = typeof HIT_RESPONSE;

export const PLAYER_CREATE= 'PLAYER_CREATE';
export type PLAYER_CREATE = typeof PLAYER_CREATE;

export const PLAYER_QUIT= 'PLAYER_QUIT';
export type PLAYER_QUIT = typeof PLAYER_QUIT;

export const HUB_JOINED= 'HUB_JOINED';
export type HUB_JOINED = typeof HUB_JOINED;


export const TURN_CHANGED= 'TURN_CHANGED';
export type TURN_CHANGED = typeof TURN_CHANGED;

export const TURN_READY= 'TURN_READY';
export type TURN_READY = typeof TURN_READY;