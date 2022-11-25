import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div className="row mb-lg-5 mt-lg-5">
                <div className="col-8 m-auto">
                    <p>
                        <a className="btn primary-bg w-100" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">1. What are the different ways to manage a state in a React application?</a>
                    </p>
                    <div className="row mb-lg-3">
                        <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample1">
                                <div className="card card-body">
                                    <span className='fw-bold'>Answer :</span> <ol>
                                        <li>URL</li>
                                        <li>Web Storage</li>
                                        <li>Local State</li>
                                        <li>Lifted State</li>
                                        <li>Derived State</li>

                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8 m-auto">
                    <p>
                        <a className="btn primary-bg w-100" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">2. How does prototypical inheritance work?</a>
                    </p>
                    <div className="row mb-lg-3">
                        <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample2">
                                <div className="card card-body">
                                    <p><span className='fw-bold'>Answer : </span>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8 m-auto">
                    <p>
                        <a className="btn primary-bg w-100" data-bs-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample3">3. What is a unit test? Why should we write unit tests?</a>
                    </p>
                    <div className="row mb-lg-3">
                        <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample3">
                                <div className="card card-body">
                                    <p><span className='fw-bold'>Answer : </span> Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8 m-auto">
                    <p>
                        <a className="btn primary-bg w-100" data-bs-toggle="collapse" href="#multiCollapseExample4" role="button" aria-expanded="false" aria-controls="multiCollapseExample4">4. React vs. Angular vs. Vue? </a>
                    </p>
                    <div className="row mb-lg-3">
                        <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample4">
                                <div className="card card-body">
                                    <p><span className='fw-bold'>Answer : </span>If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.

                                        React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.
                                        The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;