---
title: HttpStatusCode - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="./index.html">HttpStatusCode</a></div>

# HttpStatusCode

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">HttpStatusCode</span></code></div>

Represents an HTTP status code and description.

### Parameters

<code>value</code> - is a numeric code.

<code>description</code> - is free form description of a status.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">HttpStatusCode</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.HttpStatusCode$<init>(kotlin.Int, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.HttpStatusCode$<init>(kotlin.Int, kotlin.String)/description">description</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

Represents an HTTP status code and description.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="description.html">description</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">description</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

is free form description of a status.


</td>
</tr>
<tr>
<td markdown="1">

<a href="value.html">value</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">value</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

is a numeric code.


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="description.html">description</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">description</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.HttpStatusCode$description(kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

Returns a copy of <code>this</code> code with a description changed to <a href="description.html#io.ktor.http.HttpStatusCode$description(kotlin.String)/value">value</a>.


</td>
</tr>
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

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-accepted.html">Accepted</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Accepted</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-bad-gateway.html">BadGateway</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">BadGateway</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-bad-request.html">BadRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">BadRequest</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-conflict.html">Conflict</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Conflict</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-continue.html">Continue</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Continue</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-created.html">Created</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Created</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-expectation-failed.html">ExpectationFailed</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">ExpectationFailed</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-failed-dependency.html">FailedDependency</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">FailedDependency</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-forbidden.html">Forbidden</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Forbidden</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-found.html">Found</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Found</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-gateway-timeout.html">GatewayTimeout</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">GatewayTimeout</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-gone.html">Gone</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Gone</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-insufficient-storage.html">InsufficientStorage</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">InsufficientStorage</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-internal-server-error.html">InternalServerError</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">InternalServerError</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-length-required.html">LengthRequired</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">LengthRequired</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-locked.html">Locked</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Locked</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-method-not-allowed.html">MethodNotAllowed</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">MethodNotAllowed</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-moved-permanently.html">MovedPermanently</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">MovedPermanently</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-multi-status.html">MultiStatus</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">MultiStatus</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-multiple-choices.html">MultipleChoices</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">MultipleChoices</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-no-content.html">NoContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">NoContent</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-non-authoritative-information.html">NonAuthoritativeInformation</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">NonAuthoritativeInformation</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-not-acceptable.html">NotAcceptable</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">NotAcceptable</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-not-found.html">NotFound</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">NotFound</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-not-implemented.html">NotImplemented</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">NotImplemented</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-not-modified.html">NotModified</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">NotModified</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-o-k.html">OK</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">OK</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-partial-content.html">PartialContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">PartialContent</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-payload-too-large.html">PayloadTooLarge</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">PayloadTooLarge</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-payment-required.html">PaymentRequired</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">PaymentRequired</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-permanent-redirect.html">PermanentRedirect</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">PermanentRedirect</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-precondition-failed.html">PreconditionFailed</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">PreconditionFailed</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-processing.html">Processing</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Processing</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-proxy-authentication-required.html">ProxyAuthenticationRequired</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">ProxyAuthenticationRequired</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-request-header-field-too-large.html">RequestHeaderFieldTooLarge</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">RequestHeaderFieldTooLarge</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-request-timeout.html">RequestTimeout</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">RequestTimeout</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-request-u-r-i-too-long.html">RequestURITooLong</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">RequestURITooLong</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-requested-range-not-satisfiable.html">RequestedRangeNotSatisfiable</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">RequestedRangeNotSatisfiable</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-reset-content.html">ResetContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">ResetContent</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-see-other.html">SeeOther</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">SeeOther</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-service-unavailable.html">ServiceUnavailable</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">ServiceUnavailable</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-switch-proxy.html">SwitchProxy</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">SwitchProxy</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-switching-protocols.html">SwitchingProtocols</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">SwitchingProtocols</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-temporary-redirect.html">TemporaryRedirect</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">TemporaryRedirect</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-too-many-requests.html">TooManyRequests</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">TooManyRequests</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-unauthorized.html">Unauthorized</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Unauthorized</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-unprocessable-entity.html">UnprocessableEntity</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">UnprocessableEntity</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-unsupported-media-type.html">UnsupportedMediaType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">UnsupportedMediaType</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-upgrade-required.html">UpgradeRequired</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">UpgradeRequired</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-use-proxy.html">UseProxy</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">UseProxy</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-variant-also-negotiates.html">VariantAlsoNegotiates</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">VariantAlsoNegotiates</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-version-not-supported.html">VersionNotSupported</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">VersionNotSupported</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="all-status-codes.html">allStatusCodes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">allStatusCodes</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a><span class="symbol">&gt;</span></code></div>

All known status codes


</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="from-value.html">fromValue</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">fromValue</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.HttpStatusCode.Companion$fromValue(kotlin.Int)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

Creates an instance of <a href="./index.md">HttpStatusCode</a> with the given numeric value.


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../is-success.html">isSuccess</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a><span class="symbol">.</span><span class="identifier">isSuccess</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Checks if a given status code is a success code according to HTTP standards.


</td>
</tr>
</tbody>
</table>

### Companion Object Extension Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-exception-failed.html">ExceptionFailed</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">HttpStatusCode.Companion</span><span class="symbol">.</span><s><span class="identifier">ExceptionFailed</span></s><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
</tbody>
</table>
