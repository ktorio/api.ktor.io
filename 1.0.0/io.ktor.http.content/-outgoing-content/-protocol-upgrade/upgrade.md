---
title: OutgoingContent.ProtocolUpgrade.upgrade - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http.content</a> / <a href="../index.html">OutgoingContent</a> / <a href="index.html">ProtocolUpgrade</a> / <a href="./upgrade.html">upgrade</a></div>

# upgrade

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">upgrade</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.OutgoingContent.ProtocolUpgrade$upgrade(kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, , )/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.OutgoingContent.ProtocolUpgrade$upgrade(kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, , )/output">output</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteWriteChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.OutgoingContent.ProtocolUpgrade$upgrade(kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, , )/engineContext">engineContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.OutgoingContent.ProtocolUpgrade$upgrade(kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, , )/userContext">userContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">Job</span></code></div>

Upgrades an HTTP connection

### Parameters

<code>input</code> - is a <a href="#">ByteReadChannel</a> for an upgraded connection

<code>output</code> - is a <a href="#">ByteWriteChannel</a> for an upgraded connection

<code>engineContext</code> - is a <a href="#">CoroutineContext</a> to execute non-blocking code, such as parsing or processing

<code>userContext</code> - is a <a href="#">CoroutineContext</a> to execute user-provided callbacks or code potentially blocking