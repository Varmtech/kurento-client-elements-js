/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var checkType = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;

var ComplexType = require('kurento-client-core').complexTypes.ComplexType;


/**
 * The ICE connection state for a certain stream and component.
 *
 * @constructor module:elements/complexTypes.IceConnection
 *
 * @property {external:String} streamId
 *  The ID of the stream
 * @property {external:Integer} componentId
 *  The ID of the component
 * @property {module:elements/complexTypes.IceComponentState} state
 *  The state of the component
 */
function IceConnection(iceConnectionDict){
  if(!(this instanceof IceConnection))
    return new IceConnection(iceConnectionDict)

  iceConnectionDict = iceConnectionDict || {}

  // Check iceConnectionDict has the required fields
  // 
  // checkType('String', 'iceConnectionDict.streamId', iceConnectionDict.streamId, {required: true});
  //  
  // checkType('int', 'iceConnectionDict.componentId', iceConnectionDict.componentId, {required: true});
  //  
  // checkType('IceComponentState', 'iceConnectionDict.state', iceConnectionDict.state, {required: true});
  //  

  // Init parent class
  IceConnection.super_.call(this, iceConnectionDict)

  // Set object properties
  Object.defineProperties(this, {
    streamId: {
      writable: true,
      enumerable: true,
      value: iceConnectionDict.streamId
    },
    componentId: {
      writable: true,
      enumerable: true,
      value: iceConnectionDict.componentId
    },
    state: {
      writable: true,
      enumerable: true,
      value: iceConnectionDict.state
    }
  })
}
inherits(IceConnection, ComplexType)

// Private identifiers to allow re-construction of the complexType on the server
// They need to be enumerable so JSON.stringify() can access to them
Object.defineProperties(IceConnection.prototype, {
  __module__: {
    enumerable: true,
    value: "kurento"
  },
  __type__: {
    enumerable: true,
    value: "IceConnection"
  }
})

/**
 * Checker for {@link module:elements/complexTypes.IceConnection}
 *
 * @memberof module:elements/complexTypes
 *
 * @param {external:String} key
 * @param {module:elements/complexTypes.IceConnection} value
 */
function checkIceConnection(key, value)
{
  if(!(value instanceof IceConnection))
    throw ChecktypeError(key, IceConnection, value);
};


module.exports = IceConnection;

IceConnection.check = checkIceConnection;