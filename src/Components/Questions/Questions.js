import React from 'react';

const Questions = () => {
	return (
		<>
			<div id='questions-container' className='mb-12'>
				<div className='w-10/12 mx-auto bg-white p-4 md:p-10 lg:p-16 rounded-2xl shadow-lg'>
					<div className='accordion' id='accordionExample'>
						<div className='accordion-item bg-white border border-gray-200'>
							<h2 className='accordion-header mb-0' id='headingOne'>
								<button
									className='
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-lg text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
		font-bold
      '
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseOne'
									aria-expanded='true'
									aria-controls='collapseOne'
								>
									Q1: How Does React Works?
								</button>
							</h2>
							<div
								id='collapseOne'
								className='accordion-collapse collapse show'
								aria-labelledby='headingOne'
								data-bs-parent='#accordionExample'
							>
								<div className='accordion-body py-4 px-5'>
									<strong>Ans:</strong> React creates a VIRTUAL DOM in
									memory.Instead of manipulating the browser's DOM directly,
									React creates a virtual DOM in memory, where it does all the
									necessary manipulating, before making the changes in the
									browser DOM.React finds out what changes have been made, and
									changes only what needs to be changed.
								</div>
							</div>
						</div>
						<div className='accordion-item bg-white border border-gray-200'>
							<h2 className='accordion-header mb-0' id='headingTwo'>
								<button
									className='
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-lg text-gray-800 text-left
		font-bold
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      '
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseTwo'
									aria-expanded='false'
									aria-controls='collapseTwo'
								>
									Q2: Differences Between Props & State in React?
								</button>
							</h2>
							<div
								id='collapseTwo'
								className='accordion-collapse collapse'
								aria-labelledby='headingTwo'
								data-bs-parent='#accordionExample'
							>
								<div className='accordion-body py-4 px-5'>
									<strong>Ans:</strong>
									<br />
									<strong>Props in React:</strong>Props, short for Properties in
									React Props, short for properties, allow the user to pass
									arguments or data to components. These props help make the
									components more dynamic. Props in a component are read-only
									and cannot be changed.
									<br />
									<li>
										Props are used to send data and event handlers to a
										component's children.
									</li>
									<li>
										Props are immutable — they can't be modified after they've
										been set.
									</li>
									<li>
										Both functional and class components can benefit from the
										use of props.
									</li>
									<li>
										The parent component sets props for the children components.
									</li>
									<br />
									<strong>State in React:</strong>A state is an object that
									stores properties values for those attributed to a component
									that could change over some time.
									<ol className='list-decimal'>
										<li>
											A state can be changed as a result of a user's action or
											changes in the network.
										</li>
										<li>
											React re-renders the component to the browser whenever the
											state of an object changes.
										</li>
										<li>
											The function Object(),is where the state object is
											created.
										</li>
										<li>
											Multiple properties can be stored in the state object.
										</li>
										<li>
											setState() is used to alter the state object's value.
										</li>
										<li>
											The setState() function merges the new and prior states
											shallowly
										</li>
									</ol>
									<li>
										The data of the components that must be presented to it
										store the view in the state.
									</li>
									<li>
										The data is stored in the state, which might change over
										time.
									</li>
									<li>
										Before[React Hook],Only class components could use the
										state.
									</li>
									<li>
										Event handlers are typically responsible for updating the
										state.
									</li>
								</div>
							</div>
						</div>
						<div className='accordion-item bg-white border border-gray-200'>
							<h2 className='accordion-header mb-0' id='headingThree'>
								<button
									className='
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-lg text-gray-800 text-left
		font-bold
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      '
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseThree'
									aria-expanded='false'
									aria-controls='collapseThree'
								>
									Q2: What are the Different use cases of useEffect()
									without(fetch API data)?
								</button>
							</h2>
							<div
								id='collapseThree'
								className='accordion-collapse collapse'
								aria-labelledby='headingThree'
								data-bs-parent='#accordionExample'
							>
								<div className='accordion-body py-4 px-5'>
									<strong>Ans:</strong>
									<br />
									useEffect() is for side-effects. A functional React component
									uses props and/or state to calculate the output. If the
									functional component makes calculations that don't target the
									output value, then these calculations are named side-effects.
									<br />
									Side Effect Runs,
									<ol className='list-decimal'>
										<li>
											After the first render of the component--for[fetch API
											data]
										</li>
										<li>After every render of the component.</li>
										<li>
											Only Once After Initial Render,empty dependency Array[].
										</li>
										<li>
											After State Value Changes--[validating input field,live
											filtering() from an array,trigger animation on new array
											value]
										</li>
										<li>
											After Props Value Change--[update paragraph list on
											fetched API data update,updating fetched API data to get
											updated BTC price]
										</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Questions;
