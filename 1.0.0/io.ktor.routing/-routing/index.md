---
title: Routing - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.routing</a> / <a href="./index.html">Routing</a></div>

# Routing

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Routing</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Root routing node for an <a href="../../io.ktor.application/-application/index.html">Application</a>

### Parameters

<code>application</code> - is an instance of <a href="../../io.ktor.application/-application/index.html">Application</a> for this routing

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../io.ktor.application/-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">,</span>&nbsp;<a href="./index.md"><span class="identifier">Routing</span></a><span class="symbol">,</span>&nbsp;<a href="./index.md"><span class="identifier">Routing</span></a><span class="symbol">&gt;</span></code></div>

Installable feature for <a href="./index.md">Routing</a>


</td>
</tr>
</tbody>
</table>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Routing</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.routing.Routing$<init>(io.ktor.application.Application)/application">application</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">)</span></code></div>

Root routing node for an <a href="../../io.ktor.application/-application/index.html">Application</a>


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

is an instance of <a href="../../io.ktor.application/-application/index.html">Application</a> for this routing


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-route/children.html">children</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">children</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">&gt;</span></code></div>

List of child routes for this node


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-route/parent.html">parent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">parent</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">?</span></code></div>

is a parent node in the tree, or null for root node


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-route/selector.html">selector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">selector</span><span class="symbol">: </span><a href="../-route-selector/index.html"><span class="identifier">RouteSelector</span></a></code></div>

is an instance of <a href="../-route-selector/index.html">RouteSelector</a> for this node


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="trace.html">trace</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">trace</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.routing.Routing$trace(kotlin.Function1((io.ktor.routing.RoutingResolveTrace, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="../-routing-resolve-trace/index.html"><span class="identifier">RoutingResolveTrace</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Register a route resolution trace function.
See https://ktor.io/servers/features/routing.html#tracing for details


</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-route/after-intercepted.html">afterIntercepted</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">afterIntercepted</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Invoked after an interceptor has been installed


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-route/create-child.html">createChild</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">createChild</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.routing.Route$createChild(io.ktor.routing.RouteSelector)/selector">selector</span><span class="symbol">:</span>&nbsp;<a href="../-route-selector/index.html"><span class="identifier">RouteSelector</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Creates a child node in this node with a given <a href="../-route/create-child.html#io.ktor.routing.Route$createChild(io.ktor.routing.RouteSelector)/selector">selector</a> or returns an existing one with the same selector


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-route/handle.html">handle</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">handle</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.Route$handle(kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/handler">handler</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs a handler into this route which will be called when the route is selected for a call


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-route/invoke.html">invoke</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="identifier">invoke</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.routing.Route$invoke(kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Allows using route instance for building additional routes


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-route/to-string.html">toString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">toString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-routing-call-finished.html">RoutingCallFinished</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">RoutingCallFinished</span><span class="symbol">: </span><a href="../../io.ktor.application/-event-definition/index.html"><span class="identifier">EventDefinition</span></a><span class="symbol">&lt;</span><a href="../-routing-application-call/index.html"><span class="identifier">RoutingApplicationCall</span></a><span class="symbol">&gt;</span></code></div>

Event definition for when a routing-based call processing finished


</td>
</tr>
<tr>
<td markdown="1">

<a href="-routing-call-started.html">RoutingCallStarted</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">RoutingCallStarted</span><span class="symbol">: </span><a href="../../io.ktor.application/-event-definition/index.html"><span class="identifier">EventDefinition</span></a><span class="symbol">&lt;</span><a href="../-routing-application-call/index.html"><span class="identifier">RoutingApplicationCall</span></a><span class="symbol">&gt;</span></code></div>

Event definition for when a routing-based call processing starts


</td>
</tr>
<tr>
<td markdown="1">

<a href="key.html">key</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">key</span><span class="symbol">: </span><a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">Routing</span></a><span class="symbol">&gt;</span></code></div>

Unique key that identifies a feature


</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="install.html">install</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.Routing.Feature$install(io.ktor.application.Application, kotlin.Function1((io.ktor.routing.Routing, kotlin.Unit)))/pipeline">pipeline</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.Routing.Feature$install(io.ktor.application.Application, kotlin.Function1((io.ktor.routing.Routing, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Routing</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">Routing</span></a></code></div>

Feature installation script


</td>
</tr>
</tbody>
</table>

### Extension Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../application.html">application</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">application</span><span class="symbol">: </span><a href="../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a></code></div>

Gets an <a href="../../io.ktor.application/-application/index.html">Application</a> for this <a href="../-route/index.html">Route</a> by scanning the hierarchy to the root


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/conversion-service.html">conversionService</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="../../io.ktor.application/-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">.</span><span class="identifier">conversionService</span><span class="symbol">: </span><a href="../../io.ktor.util/-conversion-service/index.html"><span class="identifier">ConversionService</span></a></code></div>

Lookup for a conversion service. Returns the default one if the feature wasn't installed


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.content/static-base-package.html">staticBasePackage</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">staticBasePackage</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Base package for relative resources calculations for static content


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.content/static-root-folder.html">staticRootFolder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">staticRootFolder</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">?</span></code></div>

Base folder for relative files calculations for static content


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../accept.html">accept</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">accept</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$accept(io.ktor.routing.Route, io.ktor.http.ContentType, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$accept(io.ktor.routing.Route, io.ktor.http.ContentType, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match requests with <a href="../../io.ktor.http/-http-headers/-accept.html">HttpHeaders.Accept</a> header matching specified <a href="../accept.html#io.ktor.routing$accept(io.ktor.routing.Route, io.ktor.http.ContentType, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/contentType">contentType</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.auth/authenticate.html">authenticate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">authenticate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.auth$authenticate(io.ktor.routing.Route, kotlin.Array((kotlin.String)), kotlin.Boolean, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/configurations">configurations</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;arrayOf&lt;String?&gt;(null)<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$authenticate(io.ktor.routing.Route, kotlin.Array((kotlin.String)), kotlin.Boolean, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/optional">optional</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$authenticate(io.ktor.routing.Route, kotlin.Array((kotlin.String)), kotlin.Boolean, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Creates an authentication route that does handle authentication by the specified providers referred by
<a href="../../io.ktor.auth/authenticate.html#io.ktor.auth$authenticate(io.ktor.routing.Route, kotlin.Array((kotlin.String)), kotlin.Boolean, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/configurations">configurations</a> names. <code>null</code> could be used to point to the default provider and could be also mixed with other
provider names.
Other routes, handlers and interceptors could be nested into this node


</td>
</tr>
<tr>
<td markdown="1">

<a href="../content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">contentType</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$contentType(io.ktor.routing.Route, io.ktor.http.ContentType, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$contentType(io.ktor.routing.Route, io.ktor.http.ContentType, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match requests with <a href="../../io.ktor.http/-http-headers/-content-type.html">HttpHeaders.ContentType</a> header matching specified <a href="../content-type.html#io.ktor.routing$contentType(io.ktor.routing.Route, io.ktor.http.ContentType, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/contentType">contentType</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../create-route-from-path.html">createRouteFromPath</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">createRouteFromPath</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.routing$createRouteFromPath(io.ktor.routing.Route, kotlin.String)/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Create a routing entry for specified path


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.content/default.html">default</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">default</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content$default(io.ktor.routing.Route, kotlin.String)/localPath">localPath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">default</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content$default(io.ktor.routing.Route, java.io.File)/localPath">localPath</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Specifies <a href="../../io.ktor.http.content/default.html#io.ktor.http.content$default(io.ktor.routing.Route, kotlin.String)/localPath">localPath</a> as a default file to serve when folder is requested


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.content/default-resource.html">defaultResource</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">defaultResource</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$defaultResource(io.ktor.routing.Route, kotlin.String, kotlin.String)/resource">resource</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$defaultResource(io.ktor.routing.Route, kotlin.String, kotlin.String)/resourcePackage">resourcePackage</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Specifies <a href="../../io.ktor.http.content/default-resource.html#io.ktor.http.content$defaultResource(io.ktor.routing.Route, kotlin.String, kotlin.String)/resource">resource</a> as a default resources to serve when folder is requested


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.locations/delete.html">delete</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">delete</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$delete(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.delete.T, )))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="../../io.ktor.locations/delete.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Registers a typed handler <a href="../../io.ktor.locations/delete.html#io.ktor.locations$delete(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.delete.T, )))/body">body</a> for a <code>DELETE</code> location defined by class <a href="../../io.ktor.locations/delete.html#T">T</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../delete.html">delete</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">delete</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$delete(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$delete(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>DELETE</code> requests with specified <a href="../delete.html#io.ktor.routing$delete(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</a>

<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">delete</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$delete(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>DELETE</code> requests


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.pipeline/execute.html">execute</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TContext</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../../io.ktor.pipeline/-pipeline.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.pipeline/execute.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><s><span class="identifier">execute</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.pipeline$execute(io.ktor.util.pipeline.Pipeline((kotlin.Unit, io.ktor.pipeline.execute.TContext)), io.ktor.pipeline.execute.TContext)/context">context</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.pipeline/execute.html#TContext"><span class="identifier">TContext</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util.pipeline/execute.html">execute</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TContext</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.util.pipeline/execute.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">execute</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline$execute(io.ktor.util.pipeline.Pipeline((kotlin.Unit, io.ktor.util.pipeline.execute.TContext)), io.ktor.util.pipeline.execute.TContext)/context">context</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/execute.html#TContext"><span class="identifier">TContext</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Executes this pipeline


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.content/file.html">file</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">file</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$file(io.ktor.routing.Route, kotlin.String, kotlin.String)/remotePath">remotePath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$file(io.ktor.routing.Route, kotlin.String, kotlin.String)/localPath">localPath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;remotePath<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">file</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content$file(io.ktor.routing.Route, kotlin.String, java.io.File)/remotePath">remotePath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.content$file(io.ktor.routing.Route, kotlin.String, java.io.File)/localPath">localPath</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets up routing to serve <a href="../../io.ktor.http.content/file.html#io.ktor.http.content$file(io.ktor.routing.Route, kotlin.String, kotlin.String)/localPath">localPath</a> file as <a href="../../io.ktor.http.content/file.html#io.ktor.http.content$file(io.ktor.routing.Route, kotlin.String, kotlin.String)/remotePath">remotePath</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.content/files.html">files</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">files</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content$files(io.ktor.routing.Route, kotlin.String)/folder">folder</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">files</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content$files(io.ktor.routing.Route, java.io.File)/folder">folder</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets up routing to serve all files from <a href="../../io.ktor.http.content/files.html#io.ktor.http.content$files(io.ktor.routing.Route, kotlin.String)/folder">folder</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.locations/get.html">get</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">get</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$get(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.get.T, )))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="../../io.ktor.locations/get.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Registers a typed handler <a href="../../io.ktor.locations/get.html#io.ktor.locations$get(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.get.T, )))/body">body</a> for a <code>GET</code> location defined by class <a href="../../io.ktor.locations/get.html#T">T</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../get.html">get</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">get</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$get(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$get(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>GET</code> requests with specified <a href="../get.html#io.ktor.routing$get(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</a>

<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">get</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$get(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>GET</code> requests


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.locations/handle.html">handle</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">handle</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$handle(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.handle.T, )))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="../../io.ktor.locations/handle.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Registers a handler <a href="../../io.ktor.locations/handle.html#io.ktor.locations$handle(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.handle.T, )))/body">body</a> for a location defined by class <a href="../../io.ktor.locations/handle.html#T">T</a>.

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">handle</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$handle(io.ktor.routing.Route, kotlin.reflect.KClass((io.ktor.locations.handle.T)), kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.handle.T, )))/dataClass">dataClass</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.locations/handle.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$handle(io.ktor.routing.Route, kotlin.reflect.KClass((io.ktor.locations.handle.T)), kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.handle.T, )))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="../../io.ktor.locations/handle.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Registers a handler <a href="../../io.ktor.locations/handle.html#io.ktor.locations$handle(io.ktor.routing.Route, kotlin.reflect.KClass((io.ktor.locations.handle.T)), kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.handle.T, )))/body">body</a> for a location defined by class <a href="../../io.ktor.locations/handle.html#io.ktor.locations$handle(io.ktor.routing.Route, kotlin.reflect.KClass((io.ktor.locations.handle.T)), kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.handle.T, )))/dataClass">dataClass</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.locations/head.html">head</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">head</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$head(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.head.T, )))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="../../io.ktor.locations/head.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Registers a typed handler <a href="../../io.ktor.locations/head.html#io.ktor.locations$head(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.head.T, )))/body">body</a> for a <code>HEAD</code> location defined by class <a href="../../io.ktor.locations/head.html#T">T</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../head.html">head</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">head</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$head(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$head(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>HEAD</code> requests with specified <a href="../head.html#io.ktor.routing$head(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</a>

<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">head</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$head(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>HEAD</code> requests


</td>
</tr>
<tr>
<td markdown="1">

<a href="../header.html">header</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$header(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$header(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$header(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match header with specified <a href="../header.html#io.ktor.routing$header(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/name">name</a> and <a href="../header.html#io.ktor.routing$header(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/value">value</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.pipeline/intercept.html">intercept</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TSubject</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">TContext</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../../io.ktor.pipeline/-pipeline.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.pipeline/intercept.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><s><span class="identifier">intercept</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.pipeline$intercept(io.ktor.util.pipeline.Pipeline((kotlin.Any, io.ktor.pipeline.intercept.TContext)), io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.pipeline.intercept.TSubject, io.ktor.pipeline.intercept.TContext)), , kotlin.Unit)))/phase">phase</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.pipeline/-pipeline-phase.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.pipeline$intercept(io.ktor.util.pipeline.Pipeline((kotlin.Any, io.ktor.pipeline.intercept.TContext)), io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.pipeline.intercept.TSubject, io.ktor.pipeline.intercept.TContext)), , kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.pipeline/-pipeline-context.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.pipeline/intercept.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.pipeline/intercept.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="../../io.ktor.pipeline/intercept.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util.pipeline/intercept.html">intercept</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TSubject</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">TContext</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.util.pipeline/intercept.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">intercept</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline$intercept(io.ktor.util.pipeline.Pipeline((kotlin.Any, io.ktor.util.pipeline.intercept.TContext)), io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.intercept.TSubject, io.ktor.util.pipeline.intercept.TContext)), , kotlin.Unit)))/phase">phase</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline$intercept(io.ktor.util.pipeline.Pipeline((kotlin.Any, io.ktor.util.pipeline.intercept.TContext)), io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.intercept.TSubject, io.ktor.util.pipeline.intercept.TContext)), , kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.util.pipeline/intercept.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.util.pipeline/intercept.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="../../io.ktor.util.pipeline/intercept.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Intercepts an untyped pipeline when the subject is of the given type


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.locations/location.html">location</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">location</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.locations$location(io.ktor.routing.Route, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Registers a route <a href="../../io.ktor.locations/location.html#io.ktor.locations$location(io.ktor.routing.Route, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/body">body</a> for a location defined by class <a href="../../io.ktor.locations/location.html#T">T</a>.

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">location</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$location(io.ktor.routing.Route, kotlin.reflect.KClass((io.ktor.locations.location.T)), kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/data">data</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.locations/location.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$location(io.ktor.routing.Route, kotlin.reflect.KClass((io.ktor.locations.location.T)), kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Registers a route <a href="../../io.ktor.locations/location.html#io.ktor.locations$location(io.ktor.routing.Route, kotlin.reflect.KClass((io.ktor.locations.location.T)), kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/body">body</a> for a location defined by class <a href="../../io.ktor.locations/location.html#io.ktor.locations$location(io.ktor.routing.Route, kotlin.reflect.KClass((io.ktor.locations.location.T)), kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/data">data</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../method.html">method</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">method</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$method(io.ktor.routing.Route, io.ktor.http.HttpMethod, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/method">method</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$method(io.ktor.routing.Route, io.ktor.http.HttpMethod, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match specified <a href="../method.html#io.ktor.routing$method(io.ktor.routing.Route, io.ktor.http.HttpMethod, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/method">method</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../optional-param.html">optionalParam</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">optionalParam</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$optionalParam(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$optionalParam(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to optionally capture parameter with specified <a href="../optional-param.html#io.ktor.routing$optionalParam(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/name">name</a>, if it exists


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.locations/options.html">options</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">options</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$options(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.options.T, )))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="../../io.ktor.locations/options.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Registers a typed handler <a href="../../io.ktor.locations/options.html#io.ktor.locations$options(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.options.T, )))/body">body</a> for a <code>OPTIONS</code> location defined by class <a href="../../io.ktor.locations/options.html#T">T</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../options.html">options</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">options</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$options(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$options(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>OPTIONS</code> requests with specified <a href="../options.html#io.ktor.routing$options(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</a>

<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">options</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$options(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>OPTIONS</code> requests


</td>
</tr>
<tr>
<td markdown="1">

<a href="../param.html">param</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">param</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match parameter with specified <a href="../param.html#io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/name">name</a> and <a href="../param.html#io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/value">value</a>

<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">param</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match parameter with specified <a href="../param.html#io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/name">name</a> and capture its value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.locations/patch.html">patch</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">patch</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$patch(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.patch.T, )))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="../../io.ktor.locations/patch.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Registers a typed handler <a href="../../io.ktor.locations/patch.html#io.ktor.locations$patch(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.patch.T, )))/body">body</a> for a <code>PATCH</code> location defined by class <a href="../../io.ktor.locations/patch.html#T">T</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../patch.html">patch</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">patch</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$patch(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$patch(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>PATCH</code> requests with specified <a href="../patch.html#io.ktor.routing$patch(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</a>

<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">patch</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$patch(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>PATCH</code> requests


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.locations/post.html">post</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">post</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$post(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.post.T, )))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="../../io.ktor.locations/post.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Registers a typed handler <a href="../../io.ktor.locations/post.html#io.ktor.locations$post(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.post.T, )))/body">body</a> for a <code>POST</code> location defined by class <a href="../../io.ktor.locations/post.html#T">T</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../post.html">post</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">post</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$post(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$post(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>POST</code> requests with specified <a href="../post.html#io.ktor.routing$post(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</a>

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">R</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">post</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$post(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.routing.post.R, )))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$post(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.routing.post.R, )))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="../post.html#R"><span class="identifier">R</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>POST</code> requests with specified <a href="../post.html#io.ktor.routing$post(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.routing.post.R, )))/path">path</a> receiving request body content of type <a href="../post.html#R">R</a>

<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">post</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$post(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>POST</code> requests


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.locations/put.html">put</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">put</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$put(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.put.T, )))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="../../io.ktor.locations/put.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Registers a typed handler <a href="../../io.ktor.locations/put.html#io.ktor.locations$put(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.put.T, )))/body">body</a> for a <code>PUT</code> location defined by class <a href="../../io.ktor.locations/put.html#T">T</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../put.html">put</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">put</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$put(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$put(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>PUT</code> requests with specified <a href="../put.html#io.ktor.routing$put(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</a>

<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">put</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$put(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>PUT</code> requests


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.content/resource.html">resource</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">resource</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$resource(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.String)/remotePath">remotePath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$resource(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.String)/resource">resource</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;remotePath<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$resource(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.String)/resourcePackage">resourcePackage</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets up routing to serve <a href="../../io.ktor.http.content/resource.html#io.ktor.http.content$resource(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.String)/resource">resource</a> as <a href="../../io.ktor.http.content/resource.html#io.ktor.http.content$resource(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.String)/remotePath">remotePath</a> in <a href="../../io.ktor.http.content/resource.html#io.ktor.http.content$resource(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.String)/resourcePackage">resourcePackage</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.content/resources.html">resources</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">resources</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content$resources(io.ktor.routing.Route, kotlin.String)/resourcePackage">resourcePackage</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets up routing to serve all resources in <a href="../../io.ktor.http.content/resources.html#io.ktor.http.content$resources(io.ktor.routing.Route, kotlin.String)/resourcePackage">resourcePackage</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../route.html">route</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">route</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.routing$route(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.routing$route(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match specified <a href="../route.html#io.ktor.routing$route(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/path">path</a>

<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">route</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$route(io.ktor.routing.Route, kotlin.String, io.ktor.http.HttpMethod, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$route(io.ktor.routing.Route, kotlin.String, io.ktor.http.HttpMethod, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/method">method</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$route(io.ktor.routing.Route, kotlin.String, io.ktor.http.HttpMethod, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match specified <a href="../route.html#io.ktor.routing$route(io.ktor.routing.Route, kotlin.String, io.ktor.http.HttpMethod, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/method">method</a> and <a href="../route.html#io.ktor.routing$route(io.ktor.routing.Route, kotlin.String, io.ktor.http.HttpMethod, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/path">path</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.content/static.html">static</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">static</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content$static(io.ktor.routing.Route, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Create a block for static content

<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">static</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$static(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/remotePath">remotePath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$static(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

Create a block for static content at specified <a href="../../io.ktor.http.content/static.html#io.ktor.http.content$static(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/remotePath">remotePath</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.websocket/web-socket.html">webSocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">webSocket</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/protocol">protocol</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.websocket/-default-web-socket-server-session.html"><span class="identifier">DefaultWebSocketServerSession</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Bind websocket at the current route optionally checking for websocket <a href="../../io.ktor.websocket/web-socket.html#io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/protocol">protocol</a> (ignored if <code>null</code>)
Requires <a href="../../io.ktor.websocket/-web-sockets/index.html">WebSockets</a> feature to be installed first

<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">webSocket</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/protocol">protocol</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.websocket/-default-web-socket-server-session.html"><span class="identifier">DefaultWebSocketServerSession</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Bind websocket at the current route + <a href="../../io.ktor.websocket/web-socket.html#io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/path">path</a> optionally checking for websocket <a href="../../io.ktor.websocket/web-socket.html#io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/protocol">protocol</a> (ignored if <code>null</code>)
Requires <a href="../../io.ktor.websocket/-web-sockets/index.html">WebSockets</a> feature to be installed first


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.websocket/web-socket-raw.html">webSocketRaw</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">webSocketRaw</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/protocol">protocol</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.websocket/-web-socket-server-session/index.html"><span class="identifier">WebSocketServerSession</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Bind RAW websocket at the current route + <a href="../../io.ktor.websocket/web-socket-raw.html#io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/path">path</a> optionally checking for websocket <a href="../../io.ktor.websocket/web-socket-raw.html#io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/protocol">protocol</a> (ignored if <code>null</code>)
Requires <a href="../../io.ktor.websocket/-web-sockets/index.html">WebSockets</a> feature to be installed first

<div class="signature"><code><span class="keyword">fun </span><a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">webSocketRaw</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/protocol">protocol</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.websocket/-web-socket-server-session/index.html"><span class="identifier">WebSocketServerSession</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Bind RAW websocket at the current route optionally checking for websocket <a href="../../io.ktor.websocket/web-socket-raw.html#io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/protocol">protocol</a> (ignored if <code>null</code>)
Requires <a href="../../io.ktor.websocket/-web-sockets/index.html">WebSockets</a> feature to be installed first


</td>
</tr>
</tbody>
</table>
