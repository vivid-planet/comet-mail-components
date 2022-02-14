import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Example } from "./Example";

export default {
    title: "Components/Example",
    component: Example,
    argTypes: {
        foo: {
            control: { type: "boolean" },
            defaultValue: false,
        },
    },
} as ComponentMeta<typeof Example>;

export const Template: ComponentStory<typeof Example> = (args) => <Example {...args} />;
