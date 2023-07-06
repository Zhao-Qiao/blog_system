import React from "react";
import {Input, useInput, Grid, Card, Text, Button, Spacer} from "@nextui-org/react";


export default function ErrorPage() {
    const { value, reset, bindings } = useInput("");

    const validateEmail = (value) => {
        return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    };

    const helper = React.useMemo(() => {
        if (!value)
            return {
                text: "",
                color: "",
            };
        const isValid = validateEmail(value);
        return {
            text: isValid ? "Correct email" : "Enter a valid email",
            color: isValid ? "success" : "error",
        };
    }, [value]);
    return (
        <div className="ErrorPage">
            <Card isHoverable css={{ mw: "500px" , m:"0 auto", top:"200px"}}>
                <Card.Body>
                    <Grid.Container gap={2} justify='center'>
                        <Text
                            h1
                            size={55}
                            css={{
                                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                            }}
                            weight="bold"
                        >
                            Profile
                        </Text>
                    </Grid.Container>
                    <Grid.Container gap={2} justify="center">
                        <Grid>
                            <Input
                                labelLeft="username"
                                color="primary"
                                bordered
                                // placeholder="Enter your password"
                                style={{ width: "230px" }}
                                placeholder={"zqa123"}
                            />
                        </Grid>
                        <Grid>
                            <Input
                                clearable
                                color="primary"
                                type="text"
                                bordered
                                placeholder="Your Career"
                                style={{ width: "310px" }}
                            />
                        </Grid>
                        <Grid>
                            <Input
                                clearable
                                color="primary"
                                type="text"
                                bordered
                                placeholder="Department"
                                style={{ width: "310px" }}
                            />
                        </Grid>
                        <Grid>
                            <Input
                                clearable
                                color="primary"
                                type="text"
                                bordered
                                placeholder="Your Career"
                                style={{ width: "310px" }}
                            />
                        </Grid>
                        <Grid>
                            <Input
                                // labelLeft="password"
                                clearable
                                color="primary"
                                type="text"
                                bordered
                                placeholder="Motto"
                                style={{ width: "310px" }}
                            />
                        </Grid>
                        <Grid>
                            <Input.Password
                                // labelLeft="password"
                                clearable
                                color="primary"
                                type="password"
                                bordered
                                placeholder="your password"
                                style={{ width: "250px" }}
                            />
                        </Grid>

                        <Grid>
                            <Button  color="gradient" ghost>Confirm</Button>
                        </Grid>

                    </Grid.Container>
                </Card.Body>
            </Card>

        </div>


    );
}
