#include <stdio.h>

enum Days {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
};

int main() {

    enum Days today;
    today = SATURDAY;
    
    printf("Day %d\n", today);
    
    switch (today) {
        case MONDAY:
            printf("Today is MONDAY.\n");
            break;
        case TUESDAY:
            printf("Today is TUESDAY.\n");
            break;
        case WEDNESDAY:
            printf("Today is WEDNESDAY.\n");
            break;
        case THURSDAY:
            printf("Today is THURSDAY.\n");
            break;
        case FRIDAY:
            printf("Today is FRIDAY.\n");
            break;
        case SATURDAY:
            printf("Today is SATURDAY.\n");
            break;
        case SUNDAY:
            printf("Today is SUNDAY.\n");
            break;
       default:
            printf("Invalid day.\n");
    }

    return 0;
}
