---
title: DefaultServletUpgrade - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.servlet</a> / <a href="./index.html">DefaultServletUpgrade</a></div>

# DefaultServletUpgrade

<div class="signature"><code><span class="keyword">object </span><span class="identifier">DefaultServletUpgrade</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-servlet-upgrade/index.html"><span class="identifier">ServletUpgrade</span></a></code></div>

The default servlet upgrade implementation using Servlet API.
Please note that some servlet containers may not support it or it may be broken.

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="perform-upgrade.html">performUpgrade</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">performUpgrade</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.servlet.DefaultServletUpgrade$performUpgrade(io.ktor.http.content.OutgoingContent.ProtocolUpgrade, javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, , )/upgrade">upgrade</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.content/-outgoing-content/-protocol-upgrade/index.html"><span class="identifier">ProtocolUpgrade</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.servlet.DefaultServletUpgrade$performUpgrade(io.ktor.http.content.OutgoingContent.ProtocolUpgrade, javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, , )/servletRequest">servletRequest</span><span class="symbol">:</span>&nbsp;<span class="identifier">HttpServletRequest</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.servlet.DefaultServletUpgrade$performUpgrade(io.ktor.http.content.OutgoingContent.ProtocolUpgrade, javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, , )/servletResponse">servletResponse</span><span class="symbol">:</span>&nbsp;<span class="identifier">HttpServletResponse</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.servlet.DefaultServletUpgrade$performUpgrade(io.ktor.http.content.OutgoingContent.ProtocolUpgrade, javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, , )/engineContext">engineContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.servlet.DefaultServletUpgrade$performUpgrade(io.ktor.http.content.OutgoingContent.ProtocolUpgrade, javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, , )/userContext">userContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Perform HTTP upgrade using engine's native API


</td>
</tr>
</tbody>
</table>
