---
title: io.ktor.sessions - 
layout: api
---



## Package io.ktor.sessions

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-cache/index.html">Cache</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Cache</span><span class="symbol">&lt;</span><span class="keyword">in</span>&nbsp;<span class="identifier">K</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">V</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-cache-storage/index.html">CacheStorage</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">CacheStorage</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-session-storage/index.html"><span class="identifier">SessionStorage</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-cookie-configuration/index.html">CookieConfiguration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">CookieConfiguration</span></code></div>

Cookie configuration being used to send sessions


</td>
</tr>
<tr>
<td markdown="1">

<a href="-cookie-id-session-builder/index.html">CookieIdSessionBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">CookieIdSessionBuilder</span><span class="symbol">&lt;</span><span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-cookie-session-builder/index.html"><span class="identifier">CookieSessionBuilder</span></a><span class="symbol">&lt;</span><a href="-cookie-id-session-builder/index.html#S"><span class="identifier">S</span></a><span class="symbol">&gt;</span></code></div>

Cookie session configuration builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="-cookie-session-builder/index.html">CookieSessionBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">CookieSessionBuilder</span><span class="symbol">&lt;</span><span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span></code></div>

Cookie session configuration builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="-current-session/index.html">CurrentSession</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">CurrentSession</span></code></div>

Represents a container for all session instances


</td>
</tr>
<tr>
<td markdown="1">

<a href="-header-id-session-builder/index.html">HeaderIdSessionBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HeaderIdSessionBuilder</span><span class="symbol">&lt;</span><span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-header-session-builder/index.html"><span class="identifier">HeaderSessionBuilder</span></a><span class="symbol">&lt;</span><a href="-header-id-session-builder/index.html#S"><span class="identifier">S</span></a><span class="symbol">&gt;</span></code></div>

Header session configuration builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="-header-session-builder/index.html">HeaderSessionBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">HeaderSessionBuilder</span><span class="symbol">&lt;</span><span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span></code></div>

Header session configuration builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="-session-provider/index.html">SessionProvider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionProvider</span></code></div>

Specifies a provider for a session with the specific <a href="-session-provider/name.html">name</a> and <a href="-session-provider/type.html">type</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-session-serializer/index.html">SessionSerializer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">SessionSerializer</span></code></div>

Serializes session from and to <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-session-serializer-reflection/index.html">SessionSerializerReflection</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionSerializerReflection</span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-session-serializer/index.html"><span class="identifier">SessionSerializer</span></a></code></div>

Default reflection-based session serializer that does it via reflection.
Serialized format is textual and optimized for size as it is could be transferred via HTTP headers or cookies


</td>
</tr>
<tr>
<td markdown="1">

<a href="-session-storage/index.html">SessionStorage</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">SessionStorage</span></code></div>

Represents a way to <a href="-session-storage/write.html">write</a>, <a href="-session-storage/read.html">read</a> and <a href="-session-storage/invalidate.html">invalidate</a> session bits.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-session-storage-memory/index.html">SessionStorageMemory</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionStorageMemory</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-session-storage/index.html"><span class="identifier">SessionStorage</span></a></code></div>

<a href="-session-storage/index.html">SessionStorage</a> that stores session contents into memory.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-session-tracker/index.html">SessionTracker</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">SessionTracker</span></code></div>

SessionTracker provides ability to track and extract session from the call context.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-session-tracker-by-id/index.html">SessionTrackerById</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionTrackerById</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-session-tracker/index.html"><span class="identifier">SessionTracker</span></a></code></div>

<a href="-session-tracker/index.html">SessionTracker</a> that transfers a Session Id generated by a <a href="-session-tracker-by-id/session-id-provider.html">sessionIdProvider</a> in HTTP Headers/Cookies.
It uses a <a href="-session-tracker-by-id/storage.html">storage</a> and a <a href="-session-tracker-by-id/serializer.html">serializer</a> to store/load serialized/deserialized session content of a specific <a href="-session-tracker-by-id/type.html">type</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-session-tracker-by-value/index.html">SessionTrackerByValue</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionTrackerByValue</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-session-tracker/index.html"><span class="identifier">SessionTracker</span></a></code></div>

<a href="-session-tracker/index.html">SessionTracker</a> that stores the contents of the session as part of HTTP Cookies/Headers.
It uses a specific <a href="-session-tracker-by-value/serializer.html">serializer</a> to serialize and deserialize objects of type <a href="-session-tracker-by-value/type.html">type</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-session-transport/index.html">SessionTransport</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">SessionTransport</span></code></div>

SessionTransport <a href="-session-transport/receive.html">receive</a>, <a href="-session-transport/send.html">send</a> or <a href="-session-transport/clear.html">clear</a> a session from/to an <a href="../io.ktor.application/-application-call/index.html">ApplicationCall</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-session-transport-cookie/index.html">SessionTransportCookie</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionTransportCookie</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-session-transport/index.html"><span class="identifier">SessionTransport</span></a></code></div>

SessionTransport that adds a Set-Cookie header and reads Cookie header
for the specified cookie <a href="-session-transport-cookie/name.html">name</a>, and a specific cookie <a href="-session-transport-cookie/configuration.html">configuration</a> after
applying/un-applying the specified transforms defined by <a href="-session-transport-cookie/transformers.html">transformers</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-session-transport-header/index.html">SessionTransportHeader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionTransportHeader</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-session-transport/index.html"><span class="identifier">SessionTransport</span></a></code></div>

SessionTransport that sets or gets the specific header <a href="-session-transport-header/name.html">name</a>,
applying/un-applying the specified transforms defined by <a href="-session-transport-header/transformers.html">transformers</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-session-transport-transformer/index.html">SessionTransportTransformer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">SessionTransportTransformer</span></code></div>

Represents a session cookie transformation. Useful for such things like signing and encryption


</td>
</tr>
<tr>
<td markdown="1">

<a href="-session-transport-transformer-digest/index.html">SessionTransportTransformerDigest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionTransportTransformerDigest</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-session-transport-transformer/index.html"><span class="identifier">SessionTransportTransformer</span></a></code></div>

Session transformer that appends an <a href="-session-transport-transformer-digest/algorithm.html">algorithm</a> hash of the input.
Where the input is either a session contents or a previous transformation.
It prepends a <a href="-session-transport-transformer-digest/salt.html">salt</a> when computing the hash.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-session-transport-transformer-encrypt/index.html">SessionTransportTransformerEncrypt</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionTransportTransformerEncrypt</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-session-transport-transformer/index.html"><span class="identifier">SessionTransportTransformer</span></a></code></div>

Session transformer that encrypts/decrypts the input.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-session-transport-transformer-message-authentication/index.html">SessionTransportTransformerMessageAuthentication</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionTransportTransformerMessageAuthentication</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-session-transport-transformer/index.html"><span class="identifier">SessionTransportTransformer</span></a></code></div>

Session transformer that appends an <a href="-session-transport-transformer-message-authentication/algorithm.html">algorithm</a> MAC (Message Authentication Code) hash of the input.
Where the input is either a session contents or a previous transformation.
It uses a specified <a href="-session-transport-transformer-message-authentication/key-spec.html">keySpec</a> when generating the Mac hash.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-sessions/index.html">Sessions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Sessions</span></code></div>

Sessions reature that provides a mechanism to persist information between requests.


</td>
</tr>
</tbody>
</table>

### Extensions for External Classes

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="kotlin.collections.-list/index.html">kotlin.collections.List</a>


</td>
<td markdown="1">

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="sessions.html">sessions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">sessions</span><span class="symbol">: </span><a href="-current-session/index.html"><span class="identifier">CurrentSession</span></a></code></div>

Get current session or fail if no session feature installed


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="auto-serializer-of.html">autoSerializerOf</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">autoSerializerOf</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="-session-serializer-reflection/index.html"><span class="identifier">SessionSerializerReflection</span></a><span class="symbol">&lt;</span><a href="auto-serializer-of.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span></code></div>

Creates the the default <a href="-session-serializer/index.html">SessionSerializer</a> for type <a href="auto-serializer-of.html#T">T</a>

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">autoSerializerOf</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$autoSerializerOf(kotlin.reflect.KClass((io.ktor.sessions.autoSerializerOf.T)))/type">type</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="auto-serializer-of.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-session-serializer-reflection/index.html"><span class="identifier">SessionSerializerReflection</span></a><span class="symbol">&lt;</span><a href="auto-serializer-of.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span></code></div>

Creates the the default <a href="-session-serializer/index.html">SessionSerializer</a> for class <a href="auto-serializer-of.html#io.ktor.sessions$autoSerializerOf(kotlin.reflect.KClass((io.ktor.sessions.autoSerializerOf.T)))/type">type</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="clear.html">clear</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <a href="-current-session/index.html"><span class="identifier">CurrentSession</span></a><span class="symbol">.</span><span class="identifier">clear</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Clear session instance with type <a href="clear.html#T">T</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="cookie.html">cookie</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-sessions/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">cookie</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.cookie.S)), io.ktor.sessions.SessionStorage)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.cookie.S)), io.ktor.sessions.SessionStorage)/sessionType">sessionType</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="cookie.html#S"><span class="identifier">S</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.cookie.S)), io.ktor.sessions.SessionStorage)/storage">storage</span><span class="symbol">:</span>&nbsp;<a href="-session-storage/index.html"><span class="identifier">SessionStorage</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-sessions/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">cookie</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, io.ktor.sessions.SessionStorage)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, io.ktor.sessions.SessionStorage)/storage">storage</span><span class="symbol">:</span>&nbsp;<a href="-session-storage/index.html"><span class="identifier">SessionStorage</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-sessions/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">cookie</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.cookie.S)), io.ktor.sessions.SessionStorage, kotlin.Function1((io.ktor.sessions.CookieIdSessionBuilder((io.ktor.sessions.cookie.S)), kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.cookie.S)), io.ktor.sessions.SessionStorage, kotlin.Function1((io.ktor.sessions.CookieIdSessionBuilder((io.ktor.sessions.cookie.S)), kotlin.Unit)))/sessionType">sessionType</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="cookie.html#S"><span class="identifier">S</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.cookie.S)), io.ktor.sessions.SessionStorage, kotlin.Function1((io.ktor.sessions.CookieIdSessionBuilder((io.ktor.sessions.cookie.S)), kotlin.Unit)))/storage">storage</span><span class="symbol">:</span>&nbsp;<a href="-session-storage/index.html"><span class="identifier">SessionStorage</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.cookie.S)), io.ktor.sessions.SessionStorage, kotlin.Function1((io.ktor.sessions.CookieIdSessionBuilder((io.ktor.sessions.cookie.S)), kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="-cookie-id-session-builder/index.html"><span class="identifier">CookieIdSessionBuilder</span></a><span class="symbol">&lt;</span><a href="cookie.html#S"><span class="identifier">S</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Configure sessions to get it from cookie using session <a href="cookie.html#io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.cookie.S)), io.ktor.sessions.SessionStorage)/storage">storage</a>

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-sessions/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">cookie</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, io.ktor.sessions.SessionStorage, kotlin.Function1((io.ktor.sessions.CookieIdSessionBuilder((io.ktor.sessions.cookie.S)), kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, io.ktor.sessions.SessionStorage, kotlin.Function1((io.ktor.sessions.CookieIdSessionBuilder((io.ktor.sessions.cookie.S)), kotlin.Unit)))/storage">storage</span><span class="symbol">:</span>&nbsp;<a href="-session-storage/index.html"><span class="identifier">SessionStorage</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, io.ktor.sessions.SessionStorage, kotlin.Function1((io.ktor.sessions.CookieIdSessionBuilder((io.ktor.sessions.cookie.S)), kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="-cookie-id-session-builder/index.html"><span class="identifier">CookieIdSessionBuilder</span></a><span class="symbol">&lt;</span><a href="cookie.html#S"><span class="identifier">S</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Configures a session using a cookie with the specified <a href="cookie.html#io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, io.ktor.sessions.SessionStorage, kotlin.Function1((io.ktor.sessions.CookieIdSessionBuilder((io.ktor.sessions.cookie.S)), kotlin.Unit)))/name">name</a> using it as a session id.
The actual content of the session is stored at server side using the specified <a href="cookie.html#io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, io.ktor.sessions.SessionStorage, kotlin.Function1((io.ktor.sessions.CookieIdSessionBuilder((io.ktor.sessions.cookie.S)), kotlin.Unit)))/storage">storage</a>.
The cookie configuration can be set inside <a href="cookie.html#io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, io.ktor.sessions.SessionStorage, kotlin.Function1((io.ktor.sessions.CookieIdSessionBuilder((io.ktor.sessions.cookie.S)), kotlin.Unit)))/block">block</a> using the cookie property exposed by <a href="-cookie-id-session-builder/index.html">CookieIdSessionBuilder</a>.

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-sessions/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">cookie</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.cookie.S)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.cookie.S)))/sessionType">sessionType</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="cookie.html#S"><span class="identifier">S</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-sessions/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">cookie</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Configure sessions to serialize to/from HTTP cookie

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-sessions/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">cookie</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.Function1((io.ktor.sessions.CookieSessionBuilder((io.ktor.sessions.cookie.S)), kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.Function1((io.ktor.sessions.CookieSessionBuilder((io.ktor.sessions.cookie.S)), kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="-cookie-session-builder/index.html"><span class="identifier">CookieSessionBuilder</span></a><span class="symbol">&lt;</span><a href="cookie.html#S"><span class="identifier">S</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Configures a session using a cookie with the specified <a href="cookie.html#io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.Function1((io.ktor.sessions.CookieSessionBuilder((io.ktor.sessions.cookie.S)), kotlin.Unit)))/name">name</a> using it as for the actual session content
optionally transformed by specified transforms in <a href="cookie.html#io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.Function1((io.ktor.sessions.CookieSessionBuilder((io.ktor.sessions.cookie.S)), kotlin.Unit)))/block">block</a>.
The cookie configuration can be set inside <a href="cookie.html#io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.Function1((io.ktor.sessions.CookieSessionBuilder((io.ktor.sessions.cookie.S)), kotlin.Unit)))/block">block</a> using the cookie property exposed by <a href="-cookie-id-session-builder/index.html">CookieIdSessionBuilder</a>.

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-sessions/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">cookie</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.cookie.S)), kotlin.Function1((io.ktor.sessions.CookieSessionBuilder((io.ktor.sessions.cookie.S)), kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.cookie.S)), kotlin.Function1((io.ktor.sessions.CookieSessionBuilder((io.ktor.sessions.cookie.S)), kotlin.Unit)))/sessionType">sessionType</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="cookie.html#S"><span class="identifier">S</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.cookie.S)), kotlin.Function1((io.ktor.sessions.CookieSessionBuilder((io.ktor.sessions.cookie.S)), kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="-cookie-session-builder/index.html"><span class="identifier">CookieSessionBuilder</span></a><span class="symbol">&lt;</span><a href="cookie.html#S"><span class="identifier">S</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Configure sessions to serialize to/from HTTP cookie configuring it by <a href="cookie.html#io.ktor.sessions$cookie(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.cookie.S)), kotlin.Function1((io.ktor.sessions.CookieSessionBuilder((io.ktor.sessions.cookie.S)), kotlin.Unit)))/block">block</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="directory-session-storage.html">directorySessionStorage</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">directorySessionStorage</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$directorySessionStorage(java.io.File, kotlin.Boolean)/rootDir">rootDir</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$directorySessionStorage(java.io.File, kotlin.Boolean)/cached">cached</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;true<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-session-storage/index.html"><span class="identifier">SessionStorage</span></a></code></div>

Creates a session storage that serializes them into regular files under the specified <a href="directory-session-storage.html#io.ktor.sessions$directorySessionStorage(java.io.File, kotlin.Boolean)/rootDir">rootDir</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="get.html">get</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <a href="-current-session/index.html"><span class="identifier">CurrentSession</span></a><span class="symbol">.</span><span class="identifier">get</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="get.html#T"><span class="identifier">T</span></a><span class="symbol">?</span></code></div>

Get session instance with type <a href="get.html#T">T</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="get-or-set.html">getOrSet</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <a href="-current-session/index.html"><span class="identifier">CurrentSession</span></a><span class="symbol">.</span><span class="identifier">getOrSet</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$getOrSet(io.ktor.sessions.CurrentSession, kotlin.String, kotlin.Function0((io.ktor.sessions.getOrSet.T)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;findName(T::class)<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$getOrSet(io.ktor.sessions.CurrentSession, kotlin.String, kotlin.Function0((io.ktor.sessions.getOrSet.T)))/generator">generator</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="get-or-set.html#T"><span class="identifier">T</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="get-or-set.html#T"><span class="identifier">T</span></a></code></div>

Get or generate a new session instance using <a href="get-or-set.html#io.ktor.sessions$getOrSet(io.ktor.sessions.CurrentSession, kotlin.String, kotlin.Function0((io.ktor.sessions.getOrSet.T)))/generator">generator</a> with type <a href="get-or-set.html#T">T</a> (or <a href="get-or-set.html#io.ktor.sessions$getOrSet(io.ktor.sessions.CurrentSession, kotlin.String, kotlin.Function0((io.ktor.sessions.getOrSet.T)))/name">name</a> if specified)


</td>
</tr>
<tr>
<td markdown="1">

<a href="header.html">header</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-sessions/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.header.S)), io.ktor.sessions.SessionStorage)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.header.S)), io.ktor.sessions.SessionStorage)/sessionType">sessionType</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="header.html#S"><span class="identifier">S</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.header.S)), io.ktor.sessions.SessionStorage)/storage">storage</span><span class="symbol">:</span>&nbsp;<a href="-session-storage/index.html"><span class="identifier">SessionStorage</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-sessions/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, io.ktor.sessions.SessionStorage)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, io.ktor.sessions.SessionStorage)/storage">storage</span><span class="symbol">:</span>&nbsp;<a href="-session-storage/index.html"><span class="identifier">SessionStorage</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Configure sessions to get it from HTTP header using session <a href="header.html#io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.header.S)), io.ktor.sessions.SessionStorage)/storage">storage</a>

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-sessions/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, io.ktor.sessions.SessionStorage, kotlin.Function1((io.ktor.sessions.HeaderIdSessionBuilder((io.ktor.sessions.header.S)), kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, io.ktor.sessions.SessionStorage, kotlin.Function1((io.ktor.sessions.HeaderIdSessionBuilder((io.ktor.sessions.header.S)), kotlin.Unit)))/storage">storage</span><span class="symbol">:</span>&nbsp;<a href="-session-storage/index.html"><span class="identifier">SessionStorage</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, io.ktor.sessions.SessionStorage, kotlin.Function1((io.ktor.sessions.HeaderIdSessionBuilder((io.ktor.sessions.header.S)), kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="-header-id-session-builder/index.html"><span class="identifier">HeaderIdSessionBuilder</span></a><span class="symbol">&lt;</span><a href="header.html#S"><span class="identifier">S</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-sessions/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.header.S)), io.ktor.sessions.SessionStorage, kotlin.Function1((io.ktor.sessions.HeaderIdSessionBuilder((io.ktor.sessions.header.S)), kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.header.S)), io.ktor.sessions.SessionStorage, kotlin.Function1((io.ktor.sessions.HeaderIdSessionBuilder((io.ktor.sessions.header.S)), kotlin.Unit)))/sessionType">sessionType</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="header.html#S"><span class="identifier">S</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.header.S)), io.ktor.sessions.SessionStorage, kotlin.Function1((io.ktor.sessions.HeaderIdSessionBuilder((io.ktor.sessions.header.S)), kotlin.Unit)))/storage">storage</span><span class="symbol">:</span>&nbsp;<a href="-session-storage/index.html"><span class="identifier">SessionStorage</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.header.S)), io.ktor.sessions.SessionStorage, kotlin.Function1((io.ktor.sessions.HeaderIdSessionBuilder((io.ktor.sessions.header.S)), kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="-header-id-session-builder/index.html"><span class="identifier">HeaderIdSessionBuilder</span></a><span class="symbol">&lt;</span><a href="header.html#S"><span class="identifier">S</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Configures a session using a header with the specified <a href="header.html#io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, io.ktor.sessions.SessionStorage, kotlin.Function1((io.ktor.sessions.HeaderIdSessionBuilder((io.ktor.sessions.header.S)), kotlin.Unit)))/name">name</a> using it as a session id.
The actual content of the session is stored at server side using the specified <a href="header.html#io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, io.ktor.sessions.SessionStorage, kotlin.Function1((io.ktor.sessions.HeaderIdSessionBuilder((io.ktor.sessions.header.S)), kotlin.Unit)))/storage">storage</a>.

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-sessions/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.header.S)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.header.S)))/sessionType">sessionType</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="header.html#S"><span class="identifier">S</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-sessions/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Configure sessions to serialize to/from HTTP header

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-sessions/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.Function1((io.ktor.sessions.HeaderSessionBuilder((io.ktor.sessions.header.S)), kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.Function1((io.ktor.sessions.HeaderSessionBuilder((io.ktor.sessions.header.S)), kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="-header-session-builder/index.html"><span class="identifier">HeaderSessionBuilder</span></a><span class="symbol">&lt;</span><a href="header.html#S"><span class="identifier">S</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Configures a session using a header with the specified <a href="header.html#io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.Function1((io.ktor.sessions.HeaderSessionBuilder((io.ktor.sessions.header.S)), kotlin.Unit)))/name">name</a> using it for the actual session content
optionally transformed by specified transforms in <a href="header.html#io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.Function1((io.ktor.sessions.HeaderSessionBuilder((io.ktor.sessions.header.S)), kotlin.Unit)))/block">block</a>.

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-sessions/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.header.S)), kotlin.Function1((io.ktor.sessions.HeaderSessionBuilder((io.ktor.sessions.header.S)), kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.header.S)), kotlin.Function1((io.ktor.sessions.HeaderSessionBuilder((io.ktor.sessions.header.S)), kotlin.Unit)))/sessionType">sessionType</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="header.html#S"><span class="identifier">S</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.header.S)), kotlin.Function1((io.ktor.sessions.HeaderSessionBuilder((io.ktor.sessions.header.S)), kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="-header-session-builder/index.html"><span class="identifier">HeaderSessionBuilder</span></a><span class="symbol">&lt;</span><a href="header.html#S"><span class="identifier">S</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Configures a session using a header with the specified <a href="header.html#io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.header.S)), kotlin.Function1((io.ktor.sessions.HeaderSessionBuilder((io.ktor.sessions.header.S)), kotlin.Unit)))/name">name</a> using it for the actual session content
and apply <a href="header.html#io.ktor.sessions$header(io.ktor.sessions.Sessions.Configuration, kotlin.String, kotlin.reflect.KClass((io.ktor.sessions.header.S)), kotlin.Function1((io.ktor.sessions.HeaderSessionBuilder((io.ktor.sessions.header.S)), kotlin.Unit)))/block">block</a> function to configure serializataion and optional transformations


</td>
</tr>
<tr>
<td markdown="1">

<a href="set.html">set</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <a href="-current-session/index.html"><span class="identifier">CurrentSession</span></a><span class="symbol">.</span><span class="identifier">set</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions$set(io.ktor.sessions.CurrentSession, io.ktor.sessions.set.T)/value">value</span><span class="symbol">:</span>&nbsp;<a href="set.html#T"><span class="identifier">T</span></a><span class="symbol">?</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set session instance with type <a href="set.html#T">T</a>


</td>
</tr>
</tbody>
</table>
