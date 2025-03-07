import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { Grocery } from "../../models/grocery.models";

// export const getGrocery = createAction("[grocery] load grocery");
// export const storeGrocery = createAction("[grocery] store grocery", props<{ payLoad: Grocery[] }>)

export const groceryActions = createActionGroup({
    source: "Grocery API",
    events: {
        "Load groceries": emptyProps,
        "Load groceries success": props<{ payLoad: Grocery[] }>(),
        "Load groceries failure": emptyProps
    }
})
