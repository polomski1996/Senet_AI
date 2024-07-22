# game logic functions.

import random

call_count = 0

def draw_number():
    stick_num = random.randint(1,16)
    
    if stick_num == 16:
        return 6
    elif 1 <= stick_num <= 8:
        return 1
    elif 9 <= stick_num <= 12:
        return 2
    elif 13 <= stick_num <= 14:
        return 3
    elif stick_num == 15:
        return 4
    
def another_throw():
    if draw_number() in [1,4,6]:
        return True
    else: return False
    
def is_blue_moving():
    call_count += 1
    if (call_count%2==0):
        return True
    return False
    