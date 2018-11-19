---
title: io.ktor.routing - 
layout: api
---



## Package io.ktor.routing

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-and-route-selector/index.html">AndRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">AndRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-route-selector/index.html"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route as a result of the AND operation using two other selectors


</td>
</tr>
<tr>
<td markdown="1">

<a href="-constant-parameter-route-selector/index.html">ConstantParameterRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">ConstantParameterRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-route-selector/index.html"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against a constant query parameter value


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-accept-route-selector/index.html">HttpAcceptRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">HttpAcceptRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-route-selector/index.html"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against a content-type in the <a href="../io.ktor.http/-http-headers/-accept.html">HttpHeaders.Accept</a> header in the request


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-header-route-selector/index.html">HttpHeaderRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">HttpHeaderRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-route-selector/index.html"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against a header in the request


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-method-route-selector/index.html">HttpMethodRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">HttpMethodRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-route-selector/index.html"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against an <a href="../io.ktor.http/-http-method/index.html">HttpMethod</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-optional-parameter-route-selector/index.html">OptionalParameterRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">OptionalParameterRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-route-selector/index.html"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against an optional query parameter value and captures its value, if found


</td>
</tr>
<tr>
<td markdown="1">

<a href="-or-route-selector/index.html">OrRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">OrRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-route-selector/index.html"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route as a result of the OR operation using two other selectors


</td>
</tr>
<tr>
<td markdown="1">

<a href="-parameter-route-selector/index.html">ParameterRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">ParameterRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-route-selector/index.html"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against a query parameter value and captures its value


</td>
</tr>
<tr>
<td markdown="1">

<a href="-path-segment-constant-route-selector/index.html">PathSegmentConstantRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">PathSegmentConstantRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-route-selector/index.html"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against a constant path segment


</td>
</tr>
<tr>
<td markdown="1">

<a href="-path-segment-optional-parameter-route-selector/index.html">PathSegmentOptionalParameterRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">PathSegmentOptionalParameterRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-route-selector/index.html"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against an optional parameter path segment and captures its value, if any


</td>
</tr>
<tr>
<td markdown="1">

<a href="-path-segment-parameter-route-selector/index.html">PathSegmentParameterRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">PathSegmentParameterRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-route-selector/index.html"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against a parameter path segment and captures its value


</td>
</tr>
<tr>
<td markdown="1">

<a href="-path-segment-selector-builder/index.html">PathSegmentSelectorBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">PathSegmentSelectorBuilder</span></code></div>

Helper object for building instances of <a href="-route-selector/index.html">RouteSelector</a> from path segments


</td>
</tr>
<tr>
<td markdown="1">

<a href="-path-segment-tailcard-route-selector/index.html">PathSegmentTailcardRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">PathSegmentTailcardRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-route-selector/index.html"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against any number of trailing path segments, and captures their values


</td>
</tr>
<tr>
<td markdown="1">

<a href="-path-segment-wildcard-route-selector/index.html">PathSegmentWildcardRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">PathSegmentWildcardRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-route-selector/index.html"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against any single path segment


</td>
</tr>
<tr>
<td markdown="1">

<a href="-route/index.html">Route</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">Route</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.application/-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a></code></div>

Describes a node in a routing tree


</td>
</tr>
<tr>
<td markdown="1">

<a href="-route-selector/index.html">RouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">RouteSelector</span></code></div>

Base type for all routing selectors


</td>
</tr>
<tr>
<td markdown="1">

<a href="-route-selector-evaluation/index.html">RouteSelectorEvaluation</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">RouteSelectorEvaluation</span></code></div>

Represents a result of a route evaluation against a call


</td>
</tr>
<tr>
<td markdown="1">

<a href="-routing/index.html">Routing</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Routing</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Root routing node for an <a href="../io.ktor.application/-application/index.html">Application</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-routing-application-call/index.html">RoutingApplicationCall</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">RoutingApplicationCall</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a></code></div>

Represents an application call being handled by <a href="-routing/index.html">Routing</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-routing-application-request/index.html">RoutingApplicationRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">RoutingApplicationRequest</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.request/-application-request/index.html"><span class="identifier">ApplicationRequest</span></a></code></div>

Represents an application request being handled by <a href="-routing/index.html">Routing</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-routing-application-response/index.html">RoutingApplicationResponse</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">RoutingApplicationResponse</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a></code></div>

Represents an application response being handled by <a href="-routing/index.html">Routing</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-routing-path/index.html">RoutingPath</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">RoutingPath</span></code></div>

Represents a parsed routing path. Consist of number of segments <a href="-routing-path/parts.html">parts</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-routing-path-segment/index.html">RoutingPathSegment</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">RoutingPathSegment</span></code></div>

Represent a single routing path segment


</td>
</tr>
<tr>
<td markdown="1">

<a href="-routing-path-segment-kind/index.html">RoutingPathSegmentKind</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">RoutingPathSegmentKind</span></code></div>

Possible routing path segment kinds


</td>
</tr>
<tr>
<td markdown="1">

<a href="-routing-resolve-context/index.html">RoutingResolveContext</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">RoutingResolveContext</span></code></div>

Represents a context in which routing resolution is being performed


</td>
</tr>
<tr>
<td markdown="1">

<a href="-routing-resolve-result/index.html">RoutingResolveResult</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">RoutingResolveResult</span></code></div>

Represents a result of routing resolution.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-routing-resolve-trace/index.html">RoutingResolveTrace</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">RoutingResolveTrace</span></code></div>

Represents the trace of routing resolution process for diagnostics.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-routing-resolve-trace-entry/index.html">RoutingResolveTraceEntry</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">RoutingResolveTraceEntry</span></code></div>

Represents a single entry in the <a href="-routing-resolve-trace/index.html">RoutingResolveTrace</a>.


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
<div class="signature"><code><span class="keyword">val </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">application</span><span class="symbol">: </span><a href="../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a></code></div>

Gets an <a href="../io.ktor.application/-application/index.html">Application</a> for this <a href="-route/index.html">Route</a> by scanning the hierarchy to the root


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="accept.html">accept</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">accept</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$accept(io.ktor.routing.Route, io.ktor.http.ContentType, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$accept(io.ktor.routing.Route, io.ktor.http.ContentType, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match requests with <a href="../io.ktor.http/-http-headers/-accept.html">HttpHeaders.Accept</a> header matching specified <a href="accept.html#io.ktor.routing$accept(io.ktor.routing.Route, io.ktor.http.ContentType, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/contentType">contentType</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">contentType</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$contentType(io.ktor.routing.Route, io.ktor.http.ContentType, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$contentType(io.ktor.routing.Route, io.ktor.http.ContentType, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match requests with <a href="../io.ktor.http/-http-headers/-content-type.html">HttpHeaders.ContentType</a> header matching specified <a href="content-type.html#io.ktor.routing$contentType(io.ktor.routing.Route, io.ktor.http.ContentType, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/contentType">contentType</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="create-route-from-path.html">createRouteFromPath</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">createRouteFromPath</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.routing$createRouteFromPath(io.ktor.routing.Route, kotlin.String)/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Create a routing entry for specified path


</td>
</tr>
<tr>
<td markdown="1">

<a href="delete.html">delete</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">delete</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$delete(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$delete(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>DELETE</code> requests with specified <a href="delete.html#io.ktor.routing$delete(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</a>

<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">delete</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$delete(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>DELETE</code> requests


</td>
</tr>
<tr>
<td markdown="1">

<a href="get.html">get</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">get</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$get(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$get(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>GET</code> requests with specified <a href="get.html#io.ktor.routing$get(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</a>

<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">get</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$get(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>GET</code> requests


</td>
</tr>
<tr>
<td markdown="1">

<a href="head.html">head</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">head</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$head(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$head(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>HEAD</code> requests with specified <a href="head.html#io.ktor.routing$head(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</a>

<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">head</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$head(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>HEAD</code> requests


</td>
</tr>
<tr>
<td markdown="1">

<a href="header.html">header</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$header(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$header(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$header(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match header with specified <a href="header.html#io.ktor.routing$header(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/name">name</a> and <a href="header.html#io.ktor.routing$header(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/value">value</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="method.html">method</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">method</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$method(io.ktor.routing.Route, io.ktor.http.HttpMethod, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/method">method</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$method(io.ktor.routing.Route, io.ktor.http.HttpMethod, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/body">body</span><span class="symbol">:</span>&nbsp;<a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match specified <a href="method.html#io.ktor.routing$method(io.ktor.routing.Route, io.ktor.http.HttpMethod, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/method">method</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="optional-param.html">optionalParam</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">optionalParam</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$optionalParam(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$optionalParam(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to optionally capture parameter with specified <a href="optional-param.html#io.ktor.routing$optionalParam(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/name">name</a>, if it exists


</td>
</tr>
<tr>
<td markdown="1">

<a href="options.html">options</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">options</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$options(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$options(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>OPTIONS</code> requests with specified <a href="options.html#io.ktor.routing$options(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</a>

<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">options</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$options(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>OPTIONS</code> requests


</td>
</tr>
<tr>
<td markdown="1">

<a href="param.html">param</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">param</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match parameter with specified <a href="param.html#io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/name">name</a> and <a href="param.html#io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/value">value</a>

<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">param</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match parameter with specified <a href="param.html#io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/name">name</a> and capture its value


</td>
</tr>
<tr>
<td markdown="1">

<a href="patch.html">patch</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">patch</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$patch(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$patch(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>PATCH</code> requests with specified <a href="patch.html#io.ktor.routing$patch(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</a>

<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">patch</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$patch(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>PATCH</code> requests


</td>
</tr>
<tr>
<td markdown="1">

<a href="post.html">post</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">post</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$post(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$post(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>POST</code> requests with specified <a href="post.html#io.ktor.routing$post(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</a>

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">R</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">post</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$post(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.routing.post.R, )))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$post(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.routing.post.R, )))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="post.html#R"><span class="identifier">R</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>POST</code> requests with specified <a href="post.html#io.ktor.routing$post(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.routing.post.R, )))/path">path</a> receiving request body content of type <a href="post.html#R">R</a>

<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">post</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$post(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>POST</code> requests


</td>
</tr>
<tr>
<td markdown="1">

<a href="put.html">put</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">put</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$put(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$put(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>PUT</code> requests with specified <a href="put.html#io.ktor.routing$put(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</a>

<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">put</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$put(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>PUT</code> requests


</td>
</tr>
<tr>
<td markdown="1">

<a href="route.html">route</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">route</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.routing$route(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.routing$route(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match specified <a href="route.html#io.ktor.routing$route(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/path">path</a>

<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">route</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$route(io.ktor.routing.Route, kotlin.String, io.ktor.http.HttpMethod, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$route(io.ktor.routing.Route, kotlin.String, io.ktor.http.HttpMethod, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/method">method</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$route(io.ktor.routing.Route, kotlin.String, io.ktor.http.HttpMethod, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match specified <a href="route.html#io.ktor.routing$route(io.ktor.routing.Route, kotlin.String, io.ktor.http.HttpMethod, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/method">method</a> and <a href="route.html#io.ktor.routing$route(io.ktor.routing.Route, kotlin.String, io.ktor.http.HttpMethod, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/path">path</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="routing.html">routing</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">.</span><span class="identifier">routing</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$routing(io.ktor.application.Application, kotlin.Function1((io.ktor.routing.Routing, kotlin.Unit)))/configuration">configuration</span><span class="symbol">:</span>&nbsp;<a href="-routing/index.html"><span class="identifier">Routing</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-routing/index.html"><span class="identifier">Routing</span></a></code></div>

Gets or installs a <a href="-routing/index.html">Routing</a> feature for the this <a href="../io.ktor.application/-application/index.html">Application</a> and runs a <a href="routing.html#io.ktor.routing$routing(io.ktor.application.Application, kotlin.Function1((io.ktor.routing.Routing, kotlin.Unit)))/configuration">configuration</a> script on it


</td>
</tr>
</tbody>
</table>
