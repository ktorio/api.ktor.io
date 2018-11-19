---
title: RoutingApplicationCall - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.routing</a> / <a href="./index.html">RoutingApplicationCall</a></div>

# RoutingApplicationCall

<div class="signature"><code><span class="keyword">class </span><span class="identifier">RoutingApplicationCall</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a></code></div>

Represents an application call being handled by <a href="../-routing/index.html">Routing</a>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">RoutingApplicationCall</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingApplicationCall$<init>(io.ktor.application.ApplicationCall, io.ktor.routing.Route, io.ktor.request.ApplicationReceivePipeline, io.ktor.response.ApplicationSendPipeline, io.ktor.http.Parameters)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingApplicationCall$<init>(io.ktor.application.ApplicationCall, io.ktor.routing.Route, io.ktor.request.ApplicationReceivePipeline, io.ktor.response.ApplicationSendPipeline, io.ktor.http.Parameters)/route">route</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingApplicationCall$<init>(io.ktor.application.ApplicationCall, io.ktor.routing.Route, io.ktor.request.ApplicationReceivePipeline, io.ktor.response.ApplicationSendPipeline, io.ktor.http.Parameters)/receivePipeline">receivePipeline</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.request/-application-receive-pipeline/index.html"><span class="identifier">ApplicationReceivePipeline</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingApplicationCall$<init>(io.ktor.application.ApplicationCall, io.ktor.routing.Route, io.ktor.request.ApplicationReceivePipeline, io.ktor.response.ApplicationSendPipeline, io.ktor.http.Parameters)/responsePipeline">responsePipeline</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.response/-application-send-pipeline/index.html"><span class="identifier">ApplicationSendPipeline</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingApplicationCall$<init>(io.ktor.application.ApplicationCall, io.ktor.routing.Route, io.ktor.request.ApplicationReceivePipeline, io.ktor.response.ApplicationSendPipeline, io.ktor.http.Parameters)/parameters">parameters</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-parameters/index.html"><span class="identifier">Parameters</span></a><span class="symbol">)</span></code></div>

Represents an application call being handled by <a href="../-routing/index.html">Routing</a>


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="application.html">application</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">application</span><span class="symbol">: </span><a href="../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a></code></div>

Application being called


</td>
</tr>
<tr>
<td markdown="1">

<a href="attributes.html">attributes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">attributes</span><span class="symbol">: </span><a href="../../io.ktor.util/-attributes/index.html"><span class="identifier">Attributes</span></a></code></div>

Attributes attached to this instance


</td>
</tr>
<tr>
<td markdown="1">

<a href="parameters.html">parameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">parameters</span><span class="symbol">: </span><a href="../../io.ktor.http/-parameters/index.html"><span class="identifier">Parameters</span></a></code></div>

Parameters associated with this call


</td>
</tr>
<tr>
<td markdown="1">

<a href="request.html">request</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">request</span><span class="symbol">: </span><a href="../-routing-application-request/index.html"><span class="identifier">RoutingApplicationRequest</span></a></code></div>

Client request


</td>
</tr>
<tr>
<td markdown="1">

<a href="response.html">response</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">response</span><span class="symbol">: </span><a href="../-routing-application-response/index.html"><span class="identifier">RoutingApplicationResponse</span></a></code></div>

Server response


</td>
</tr>
<tr>
<td markdown="1">

<a href="route.html">route</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">route</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

is the selected route


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="to-string.html">toString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">toString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Extension Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.auth/authentication.html">authentication</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">authentication</span><span class="symbol">: </span><a href="../../io.ktor.auth/-authentication-context/index.html"><span class="identifier">AuthenticationContext</span></a></code></div>

Retrieves an <a href="../../io.ktor.auth/-authentication-context/index.html">AuthenticationContext</a> for <code>this</code> call


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/call-id.html">callId</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">callId</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

A call id that is retrieved or generated by <a href="../../io.ktor.features/-call-id/index.html">CallId</a> feature or <code>null</code> (this is possible if there is no
call id provided and no generators configured or <a href="../../io.ktor.features/-call-id/index.html">CallId</a> feature is not installed)


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.locations/locations.html">locations</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">locations</span><span class="symbol">: </span><a href="../../io.ktor.locations/-locations/index.html"><span class="identifier">Locations</span></a></code></div>

Gets the <a href="../../io.ktor.locations/locations.html">Application.locations</a> feature


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.sessions/sessions.html">sessions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">sessions</span><span class="symbol">: </span><a href="../../io.ktor.sessions/-current-session/index.html"><span class="identifier">CurrentSession</span></a></code></div>

Get current session or fail if no session feature installed


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/default-text-content-type.html">defaultTextContentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">defaultTextContentType</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$defaultTextContentType(io.ktor.application.ApplicationCall, io.ktor.http.ContentType)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a></code></div>

Creates a default <a href="../../io.ktor.http/-content-type/index.html">ContentType</a> based on the given <a href="../../io.ktor.response/default-text-content-type.html#io.ktor.response$defaultTextContentType(io.ktor.application.ApplicationCall, io.ktor.http.ContentType)/contentType">contentType</a> and current call


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.auth/digest-authentication-credentials.html">digestAuthenticationCredentials</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">digestAuthenticationCredentials</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.auth/-digest-credential/index.html"><span class="identifier">DigestCredential</span></a><span class="symbol">?</span></code></div>

Retrieves <a href="../../io.ktor.auth/-digest-credential/index.html">DigestCredential</a> from this call


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.auth/principal.html">principal</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">P</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.auth/-principal.html"><span class="identifier">Principal</span></a><span class="symbol">&gt;</span> <a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">principal</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.auth/principal.html#P"><span class="identifier">P</span></a><span class="symbol">?</span></code></div>

Retrieves authenticated <a href="../../io.ktor.auth/-principal.html">Principal</a> for <code>this</code> call


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/push.html">push</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">push</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$push(io.ktor.application.ApplicationCall, kotlin.String)/pathAndQuery">pathAndQuery</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">push</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$push(io.ktor.application.ApplicationCall, kotlin.String, io.ktor.http.Parameters)/encodedPath">encodedPath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$push(io.ktor.application.ApplicationCall, kotlin.String, io.ktor.http.Parameters)/parameters">parameters</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-parameters/index.html"><span class="identifier">Parameters</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Produces HTTP/2 push from server to client or sets HTTP/1.x hint header
or does nothing.
Exact behaviour is up to engine implementation.

<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">push</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$push(io.ktor.application.ApplicationCall, kotlin.Function1((io.ktor.response.ResponsePushBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.response/-response-push-builder/index.html"><span class="identifier">ResponsePushBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Produces HTTP/2 push from server to client or sets HTTP/1.x hint header
or does nothing (may call or not call <a href="../../io.ktor.http/push.html#io.ktor.http$push(io.ktor.application.ApplicationCall, kotlin.Function1((io.ktor.response.ResponsePushBuilder, kotlin.Unit)))/block">block</a>).
Exact behaviour is up to engine implementation.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.request/receive.html">receive</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receive</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.request/receive.html#T"><span class="identifier">T</span></a></code></div>

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receive</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.request$receive(io.ktor.application.ApplicationCall, kotlin.reflect.KClass((io.ktor.request.receive.T)))/type">type</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.request/receive.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.request/receive.html#T"><span class="identifier">T</span></a></code></div>

Receives content for this request.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.request/receive-channel.html">receiveChannel</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receiveChannel</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteReadChannel</span></code></div>

Receives channel content for this call.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.request/receive-multipart.html">receiveMultipart</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receiveMultipart</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.http.content/-multi-part-data/index.html"><span class="identifier">MultiPartData</span></a></code></div>

Receives multipart data for this call.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.request/receive-or-null.html">receiveOrNull</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receiveOrNull</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.request/receive-or-null.html#T"><span class="identifier">T</span></a><span class="symbol">?</span></code></div>

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receiveOrNull</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.request$receiveOrNull(io.ktor.application.ApplicationCall, kotlin.reflect.KClass((io.ktor.request.receiveOrNull.T)))/type">type</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.request/receive-or-null.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.request/receive-or-null.html#T"><span class="identifier">T</span></a><span class="symbol">?</span></code></div>

Receives content for this request.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.request/receive-parameters.html">receiveParameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receiveParameters</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.http/-parameters/index.html"><span class="identifier">Parameters</span></a></code></div>

Receives form parameters for this call.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.request/receive-stream.html">receiveStream</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receiveStream</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html"><span class="identifier">InputStream</span></a></code></div>

Receives stream content for this call.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.request/receive-text.html">receiveText</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receiveText</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Receives incoming content for this call as <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.content/resolve-resource.html">resolveResource</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">resolveResource</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$resolveResource(io.ktor.application.ApplicationCall, kotlin.String, kotlin.String, java.lang.ClassLoader, kotlin.Function1((kotlin.String, io.ktor.http.ContentType)))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$resolveResource(io.ktor.application.ApplicationCall, kotlin.String, kotlin.String, java.lang.ClassLoader, kotlin.Function1((kotlin.String, io.ktor.http.ContentType)))/resourcePackage">resourcePackage</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$resolveResource(io.ktor.application.ApplicationCall, kotlin.String, kotlin.String, java.lang.ClassLoader, kotlin.Function1((kotlin.String, io.ktor.http.ContentType)))/classLoader">classLoader</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/ClassLoader.html"><span class="identifier">ClassLoader</span></a>&nbsp;<span class="symbol">=</span>&nbsp;application.environment.classLoader<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$resolveResource(io.ktor.application.ApplicationCall, kotlin.String, kotlin.String, java.lang.ClassLoader, kotlin.Function1((kotlin.String, io.ktor.http.ContentType)))/mimeResolve">mimeResolve</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{ ContentType.defaultForFileExtension(it) }<br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">?</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/respond.html">respond</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respond</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.response$respond(io.ktor.application.ApplicationCall, kotlin.Any)/message">message</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sends a <a href="../../io.ktor.response/respond.html#io.ktor.response$respond(io.ktor.application.ApplicationCall, kotlin.Any)/message">message</a> as a response

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respond</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respond(io.ktor.application.ApplicationCall, io.ktor.http.HttpStatusCode, kotlin.Any)/status">status</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respond(io.ktor.application.ApplicationCall, io.ktor.http.HttpStatusCode, kotlin.Any)/message">message</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets <a href="../../io.ktor.response/respond.html#io.ktor.response$respond(io.ktor.application.ApplicationCall, io.ktor.http.HttpStatusCode, kotlin.Any)/status">status</a> and sends a <a href="../../io.ktor.response/respond.html#io.ktor.response$respond(io.ktor.application.ApplicationCall, io.ktor.http.HttpStatusCode, kotlin.Any)/message">message</a> as a response


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/respond-bytes.html">respondBytes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondBytes</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.ByteArray)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.ByteArray)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.ByteArray)))/provider">provider</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a raw bytes response, using specified <a href="../../io.ktor.response/respond-bytes.html#io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.ByteArray)))/provider">provider</a> to build a byte array

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondBytes</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, kotlin.ByteArray, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/bytes">bytes</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, kotlin.ByteArray, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, kotlin.ByteArray, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, kotlin.ByteArray, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a raw bytes response, using specified <a href="../../io.ktor.response/respond-bytes.html#io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, kotlin.ByteArray, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/bytes">bytes</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/respond-file.html">respondFile</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondFile</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondFile(io.ktor.application.ApplicationCall, java.io.File, kotlin.String, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/baseDir">baseDir</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondFile(io.ktor.application.ApplicationCall, java.io.File, kotlin.String, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/fileName">fileName</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondFile(io.ktor.application.ApplicationCall, java.io.File, kotlin.String, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a contents of a file with the name <a href="../../io.ktor.response/respond-file.html#io.ktor.response$respondFile(io.ktor.application.ApplicationCall, java.io.File, kotlin.String, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/fileName">fileName</a> in the <a href="../../io.ktor.response/respond-file.html#io.ktor.response$respondFile(io.ktor.application.ApplicationCall, java.io.File, kotlin.String, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/baseDir">baseDir</a> folder

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondFile</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondFile(io.ktor.application.ApplicationCall, java.io.File, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/file">file</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondFile(io.ktor.application.ApplicationCall, java.io.File, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a contents of a <a href="../../io.ktor.response/respond-file.html#io.ktor.response$respondFile(io.ktor.application.ApplicationCall, java.io.File, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/file">file</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.html/respond-html.html">respondHtml</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondHtml</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html$respondHtml(io.ktor.application.ApplicationCall, io.ktor.http.HttpStatusCode, kotlin.Function1((kotlinx.html.HTML, kotlin.Unit)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a>&nbsp;<span class="symbol">=</span>&nbsp;HttpStatusCode.OK<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html$respondHtml(io.ktor.application.ApplicationCall, io.ktor.http.HttpStatusCode, kotlin.Function1((kotlinx.html.HTML, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="identifier">HTML</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a HTML response, using specified <a href="../../io.ktor.html/respond-html.html#io.ktor.html$respondHtml(io.ktor.application.ApplicationCall, io.ktor.http.HttpStatusCode, kotlin.Function1((kotlinx.html.HTML, kotlin.Unit)))/block">block</a> to build an HTML page


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.html/respond-html-template.html">respondHtmlTemplate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TTemplate</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.html/-template/index.html"><span class="identifier">Template</span></a><span class="symbol">&lt;</span><span class="identifier">HTML</span><span class="symbol">&gt;</span><span class="symbol">&gt;</span> <a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondHtmlTemplate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html$respondHtmlTemplate(io.ktor.application.ApplicationCall, io.ktor.html.respondHtmlTemplate.TTemplate, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.html.respondHtmlTemplate.TTemplate, kotlin.Unit)))/template">template</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.html/respond-html-template.html#TTemplate"><span class="identifier">TTemplate</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html$respondHtmlTemplate(io.ktor.application.ApplicationCall, io.ktor.html.respondHtmlTemplate.TTemplate, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.html.respondHtmlTemplate.TTemplate, kotlin.Unit)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a>&nbsp;<span class="symbol">=</span>&nbsp;HttpStatusCode.OK<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html$respondHtmlTemplate(io.ktor.application.ApplicationCall, io.ktor.html.respondHtmlTemplate.TTemplate, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.html.respondHtmlTemplate.TTemplate, kotlin.Unit)))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.html/respond-html-template.html#TTemplate"><span class="identifier">TTemplate</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/respond-output-stream.html">respondOutputStream</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondOutputStream</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondOutputStream(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction1((java.io.OutputStream, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondOutputStream(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction1((java.io.OutputStream, kotlin.Unit)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondOutputStream(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction1((java.io.OutputStream, kotlin.Unit)))/producer">producer</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/OutputStream.html"><span class="identifier">OutputStream</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Respond with binary content producer.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/respond-redirect.html">respondRedirect</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondRedirect</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondRedirect(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Boolean)/url">url</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondRedirect(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Boolean)/permanent">permanent</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a <code>301 Moved Permanently</code> or <code>302 Found</code> redirect

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondRedirect</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondRedirect(io.ktor.application.ApplicationCall, kotlin.Boolean, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/permanent">permanent</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondRedirect(io.ktor.application.ApplicationCall, kotlin.Boolean, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a <code>301 Moved Permanently</code> or <code>302 Found</code> redirect.
Unlike the other <a href="../../io.ktor.response/respond-redirect.html">respondRedirect</a> it provides a way to build URL based on current call using <a href="../../io.ktor.response/respond-redirect.html#io.ktor.response$respondRedirect(io.ktor.application.ApplicationCall, kotlin.Boolean, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</a> function


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.freemarker/respond-template.html">respondTemplate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondTemplate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.freemarker$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/template">template</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.freemarker$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/model">model</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.freemarker$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/etag">etag</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.freemarker$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a>&nbsp;<span class="symbol">=</span>&nbsp;ContentType.Text.Html.withCharset(Charsets.UTF_8)<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Respond with the specified <a href="../../io.ktor.freemarker/respond-template.html#io.ktor.freemarker$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/template">template</a> passing <a href="../../io.ktor.freemarker/respond-template.html#io.ktor.freemarker$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/model">model</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.velocity/respond-template.html">respondTemplate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondTemplate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.velocity$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.collections.Map((kotlin.String, kotlin.Any)), kotlin.String, io.ktor.http.ContentType)/template">template</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.velocity$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.collections.Map((kotlin.String, kotlin.Any)), kotlin.String, io.ktor.http.ContentType)/model">model</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;emptyMap()<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.velocity$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.collections.Map((kotlin.String, kotlin.Any)), kotlin.String, io.ktor.http.ContentType)/etag">etag</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.velocity$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.collections.Map((kotlin.String, kotlin.Any)), kotlin.String, io.ktor.http.ContentType)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a>&nbsp;<span class="symbol">=</span>&nbsp;ContentType.Text.Html.withCharset(Charsets.UTF_8)<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Respond with <a href="../../io.ktor.velocity/respond-template.html#io.ktor.velocity$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.collections.Map((kotlin.String, kotlin.Any)), kotlin.String, io.ktor.http.ContentType)/template">template</a> applying <a href="../../io.ktor.velocity/respond-template.html#io.ktor.velocity$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.collections.Map((kotlin.String, kotlin.Any)), kotlin.String, io.ktor.http.ContentType)/model">model</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/respond-text.html">respondText</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondText</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondText(io.ktor.application.ApplicationCall, kotlin.String, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/text">text</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondText(io.ktor.application.ApplicationCall, kotlin.String, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondText(io.ktor.application.ApplicationCall, kotlin.String, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondText(io.ktor.application.ApplicationCall, kotlin.String, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a plain text response, using specified <a href="../../io.ktor.response/respond-text.html#io.ktor.response$respondText(io.ktor.application.ApplicationCall, kotlin.String, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/text">text</a>

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondText</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondText(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.String)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondText(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.String)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondText(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.String)))/provider">provider</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a plain text response, using specified <a href="../../io.ktor.response/respond-text.html#io.ktor.response$respondText(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.String)))/provider">provider</a> to build a text


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/respond-text-writer.html">respondTextWriter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondTextWriter</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondTextWriter(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction1((java.io.Writer, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondTextWriter(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction1((java.io.Writer, kotlin.Unit)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondTextWriter(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction1((java.io.Writer, kotlin.Unit)))/writer">writer</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/Writer.html"><span class="identifier">Writer</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Respond with text content writer.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/respond-write.html">respondWrite</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><s><span class="identifier">respondWrite</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondWrite(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction1((java.io.Writer, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondWrite(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction1((java.io.Writer, kotlin.Unit)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondWrite(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction1((java.io.Writer, kotlin.Unit)))/writer">writer</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/Writer.html"><span class="identifier">Writer</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/suitable-charset.html">suitableCharset</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">suitableCharset</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$suitableCharset(io.ktor.application.ApplicationCall, java.nio.charset.Charset)/defaultCharset">defaultCharset</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/charset/Charset.html"><span class="identifier">Charset</span></a>&nbsp;<span class="symbol">=</span>&nbsp;Charsets.UTF_8<br/><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/charset/Charset.html"><span class="identifier">Charset</span></a></code></div>

Detect suitable charset for an application call by <code>Accept</code> header or fallback to <a href="../../io.ktor.features/suitable-charset.html#io.ktor.features$suitableCharset(io.ktor.application.ApplicationCall, java.nio.charset.Charset)/defaultCharset">defaultCharset</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.locations/url.html">url</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">url</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$url(io.ktor.application.ApplicationCall, kotlin.Any, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/location">location</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$url(io.ktor.application.ApplicationCall, kotlin.Any, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Constructs a String with the url of a instance <a href="../../io.ktor.locations/url.html#io.ktor.locations$url(io.ktor.application.ApplicationCall, kotlin.Any, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/location">location</a> whose class must be annotated with <a href="../../io.ktor.locations/-location/index.html">Location</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/url.html">url</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">url</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$url(io.ktor.application.ApplicationCall, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Creates an url using current call's schema, path and parameters as initial
and then invokes <a href="../../io.ktor.util/url.html#io.ktor.util$url(io.ktor.application.ApplicationCall, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</a> function on the url builder so amend parameters


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/with-e-tag.html">withETag</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><s><span class="identifier">withETag</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$withETag(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Boolean, kotlin.SuspendFunction0((kotlin.Unit)))/etag">etag</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$withETag(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Boolean, kotlin.SuspendFunction0((kotlin.Unit)))/putHeader">putHeader</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;true<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$withETag(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Boolean, kotlin.SuspendFunction0((kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Checks current <a href="../../io.ktor.features/with-e-tag.html#io.ktor.features$withETag(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Boolean, kotlin.SuspendFunction0((kotlin.Unit)))/etag">etag</a> value and pass it through conditions supplied by the remote client. Depends on conditions it
produces 410 Precondition Failed or 304 Not modified responses when necessary.
Otherwise sets ETag header and delegates to the <a href="../../io.ktor.features/with-e-tag.html#io.ktor.features$withETag(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Boolean, kotlin.SuspendFunction0((kotlin.Unit)))/block">block</a> function


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/with-last-modified.html">withLastModified</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><s><span class="identifier">withLastModified</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$withLastModified(io.ktor.application.ApplicationCall, java.time.ZonedDateTime, kotlin.Boolean, kotlin.SuspendFunction0((kotlin.Unit)))/lastModified">lastModified</span><span class="symbol">:</span>&nbsp;<span class="identifier">ZonedDateTime</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$withLastModified(io.ktor.application.ApplicationCall, java.time.ZonedDateTime, kotlin.Boolean, kotlin.SuspendFunction0((kotlin.Unit)))/putHeader">putHeader</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;true<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$withLastModified(io.ktor.application.ApplicationCall, java.time.ZonedDateTime, kotlin.Boolean, kotlin.SuspendFunction0((kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

The function passes the given <a href="../../io.ktor.features/with-last-modified.html#io.ktor.features$withLastModified(io.ktor.application.ApplicationCall, java.time.ZonedDateTime, kotlin.Boolean, kotlin.SuspendFunction0((kotlin.Unit)))/lastModified">lastModified</a> date through the client provided
http conditional headers If-Modified-Since and If-Unmodified-Since. Depends on conditions it
produces 410 Precondition Failed or 304 Not modified responses when necessary.
Otherwise sets ETag header and delegates to the <a href="../../io.ktor.features/with-last-modified.html#io.ktor.features$withLastModified(io.ktor.application.ApplicationCall, java.time.ZonedDateTime, kotlin.Boolean, kotlin.SuspendFunction0((kotlin.Unit)))/block">block</a> function.


</td>
</tr>
</tbody>
</table>
