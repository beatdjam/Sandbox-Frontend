import {LanguageContext, UserContext} from "../App";
import React, {useContext} from "react";

export default function ComponentE() {
    const user = useContext(UserContext);
    const language = useContext(LanguageContext);
    return (
        <div>
            <p>
                Provider and UseContext
                <div>{user.name} {language}</div>
            </p>
            <p>
                Provider and Consumer
                <UserContext.Consumer>
                    {
                        user => {
                            return (
                                <LanguageContext.Consumer>
                                    {
                                        language => {
                                            return <div>User context value {user.name} {language}</div>
                                        }
                                    }
                                </LanguageContext.Consumer>
                            )
                        }
                    }
                </UserContext.Consumer>
            </p>
        </div>
    )
}