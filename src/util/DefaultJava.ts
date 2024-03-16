export const DEFAULT_JAVA = 
`package com.laiketui.core.cache;


import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.util.CollectionUtils;
import redis.clients.jedis.Jedis;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;


/**
 * @description:
 * @author: wx
 * @date: Created in 2019/10/16 19:22
 * @version: 1.0
 * @modified By:
 */
public final class RedisUtil {

    private RedisTemplate<String, Object> redisTemplate;

    public void setRedisTemplate(RedisTemplate<String, Object> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }
}
`